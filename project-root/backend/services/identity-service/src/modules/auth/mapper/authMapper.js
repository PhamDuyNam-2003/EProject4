import { UserMapper } from "@/modules/user/mapper/UserMapper"; // 💡 Import UserMapper
export class AuthMapper {
    static toAuthResponseDto(user, accessToken, refreshToken) {
        return {
            user: UserMapper.toResponseDto(user),
            tokens: {
                accessToken,
                refreshToken,
            },
        };
    }
}
