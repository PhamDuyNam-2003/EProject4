import { BadRequestError, ConflictError, NotFoundError, } from "../../../utils/errors/errorCustomize";
import { Role, UserStatus } from "../../../../generated/prisma";
import { AuthMapper } from "@/modules/auth/mapper/authMapper";
import logger from "@/utils/logger";
export class AuthService {
    otpService;
    refreshTokenRepository;
    userService;
    tokenService;
    constructor(otpService, refreshTokenRepo, userService, tokenService) {
        this.otpService = otpService;
        this.refreshTokenRepository = refreshTokenRepo;
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async sendOtp(dto) {
        return await this.otpService.generateAndSendOtp(dto.email);
    }
    async verifyOtpAndLogin(dto, device) {
        const isValid = await this.otpService.verifyOtp(dto.email, dto.otp);
        if (!isValid) {
            throw new BadRequestError("Mã OTP không hợp lệ hoặc đã hết hạn.");
        }
        let user = await this.userService.getUserByEmail(dto.email);
        if (!user) {
            const defaultName = dto.email.split("@")[0];
            user = await this.userService.createUser({
                email: dto.email,
                fullName: defaultName,
                role: Role.USER,
            });
        }
        else {
            if (user.status === UserStatus.BANNED ||
                user.status === UserStatus.REJECTED) {
                throw new BadRequestError("Tài khoản của bạn đã bị khóa hoặc từ chối.");
            }
        }
        if (user.status === UserStatus.PENDING) {
            user = await this.userService.changeUserStatus(user.id, UserStatus.ACTIVE);
        }
        await this.userService.handleLoginSuccess(user.id);
        const { accessToken, refreshToken, tokenHash } = this.tokenService.generateAuthTokens(user.id, user.role, user.status);
        await this.refreshTokenRepository.create({
            userId: user.id,
            tokenHash: tokenHash,
            ipAddress: device.ipAddress,
            userAgent: device.userAgent,
            deviceName: device.deviceName,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        return AuthMapper.toAuthResponseDto(user, accessToken, refreshToken);
    }
    async loginWithPassword(dto, device) {
        const user = await this.userService.getUserWithPasswordByEmail(dto.email);
        logger.info(`[AuthService] Debug User from DB: ${JSON.stringify(user)}`);
        if (!user) {
            throw new NotFoundError("Tài khoản hoặc mật khẩu không chính xác.");
        }
        if (user.status === UserStatus.BANNED ||
            user.status === UserStatus.REJECTED) {
            throw new ConflictError("Tài khoản đã bị khóa.");
        }
        const isPasswordValid = await this.tokenService.comparePassword(dto.password, user.passwordHash);
        if (!isPasswordValid) {
            await this.userService.handleLoginFailure(user.id);
            throw new NotFoundError("Email hoặc mật khẩu không chính xác.");
        }
        await this.userService.handleLoginSuccess(user.id);
        const { accessToken, refreshToken, tokenHash } = this.tokenService.generateAuthTokens(user.id, user.role, user.status);
        await this.refreshTokenRepository.create({
            userId: user.id,
            tokenHash,
            ipAddress: device.ipAddress,
            userAgent: device.userAgent,
            deviceName: device.deviceName,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        return AuthMapper.toAuthResponseDto(user, accessToken, refreshToken);
    }
    async refreshTokens(dto, device) {
        this.tokenService.verifyRefreshToken(dto.refreshToken);
        const tokenHash = this.tokenService.hashToken(dto.refreshToken);
        const storedToken = await this.refreshTokenRepository.findByTokenHash(tokenHash);
        if (!storedToken || storedToken.revokedAt) {
            throw new ConflictError("Refresh Token không hợp lệ hoặc đã bị đăng xuất.");
        }
        if (new Date() > storedToken.expiresAt) {
            throw new ConflictError("Refresh Token đã hết hạn. Vui lòng đăng nhập lại.");
        }
        const user = await this.userService.getUserById(storedToken.userId);
        if (!user || user.status === UserStatus.BANNED) {
            throw new ConflictError("Tài khoản không hợp lệ.");
        }
        await this.refreshTokenRepository.revoke(storedToken.id, "ROTATED");
        const { accessToken, refreshToken: newRefreshToken, tokenHash: newTokenHash, } = this.tokenService.generateAuthTokens(user.id, user.role, user.status);
        await this.refreshTokenRepository.create({
            userId: user.id,
            tokenHash: newTokenHash,
            ipAddress: device.ipAddress || storedToken.ipAddress,
            userAgent: device.userAgent || storedToken.userAgent,
            deviceName: device.deviceName || storedToken.deviceName,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        return AuthMapper.toAuthResponseDto(user, accessToken, newRefreshToken);
    }
    async logout(refreshTokenStr) {
        const tokenHash = this.tokenService.hashToken(refreshTokenStr);
        const storedToken = await this.refreshTokenRepository.findByTokenHash(tokenHash);
        if (!storedToken || storedToken.revokedAt) {
            throw new BadRequestError("Token không hợp lệ hoặc đã được đăng xuất trước đó.");
        }
        await this.refreshTokenRepository.revoke(storedToken.id, "USER_LOGOUT");
    }
    async resetPassword(dto) {
        const isValid = await this.otpService.verifyOtp(dto.email, dto.otp);
        if (!isValid) {
            throw new BadRequestError("Mã OTP không hợp lệ hoặc đã hết hạn.");
        }
        const user = await this.userService.getUserByEmail(dto.email);
        if (!user) {
            throw new NotFoundError("Tài khoản không tồn tại.");
        }
        const passwordHash = await this.tokenService.hashPassword(dto.newPassword);
        await this.userService.updatePassword(user.id, passwordHash);
    }
    async changePassword(userId, dto) {
        const user = await this.userService.getUserWithPasswordByEmail((await this.userService.getUserById(userId))?.email || "");
        logger.info(`[AuthService] Debug User from DB: ${JSON.stringify(user)}`);
        if (!user) {
            throw new NotFoundError("Tài khoản không tồn tại.");
        }
        if (user.passwordHash) {
            if (!dto.oldPassword) {
                throw new BadRequestError("Vui lòng nhập mật khẩu cũ.");
            }
            const isMatch = await this.tokenService.comparePassword(dto.oldPassword, user.passwordHash);
            if (!isMatch) {
                throw new BadRequestError("Mật khẩu cũ không chính xác.");
            }
        }
        const passwordHash = await this.tokenService.hashPassword(dto.newPassword);
        await this.userService.updatePassword(user.id, passwordHash);
    }
}
