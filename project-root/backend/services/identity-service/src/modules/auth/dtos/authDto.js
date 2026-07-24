import z from "zod/v3";
export const SendOtpSchema = z.object({
    body: z.object({
        email: z.string().trim().email("Email không đúng định dạng."),
    }),
});
export const VerifyOtpSchema = z.object({
    body: z.object({
        email: z.string().trim().email("Email không hợp lệ"),
        otp: z.string().length(6, "Mã otp phải có 6 chữ số"),
    })
});
export const LoginWithPasswordSchema = z.object({
    body: z.object({
        email: z.string().trim().email("Email không đúng định dạng."),
        password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự."),
    }),
});
export const ResetPasswordSchema = z.object({
    body: z.object({
        email: z.string().trim().email("Email không đúng định dạng."),
        otp: z.string().length(6, "Mã OTP phải có 6 chữ số"),
        newPassword: z.string().min(6, "Mật khẩu mới phải có ít nhất 6 ký tự."),
    }),
});
export const ChangePasswordSchema = z.object({
    body: z.object({
        oldPassword: z.string().optional(),
        newPassword: z.string().min(6, "Mật khẩu mới phải có ít nhất 6 ký tự."),
    }),
});
export const RefreshTokenSchema = z.object({
    body: z.object({
        refreshToken: z.string().min(1, "Refresh Token không được để trống."),
    }),
});
