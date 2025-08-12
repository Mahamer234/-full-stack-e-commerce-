import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().trim().min(1, "First name is required"),
    lastName: z.string().trim().min(1, "Last name is required"),
    email: z
      .string()
      .email("Invalid email from zoddd")
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"), // Regex عشان نتحقق من صيغة الإيميل
    password: z
      .string()
      .min(6, "Password must be at least 6 characters from zoddd")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 chars, include uppercase, lowercase, number, and special character"
      ),

    confirmPassword: z
      .string()
      .min(1, "Confirm password is requiredfrom zoddd"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match ",
    path: ["confirmPassword"], // الخطأ يطلع عند confirmPassword
  });

// هنا بنستخرج النوع الجاهز لـ TypeScript
export type RegisterFormData = z.infer<typeof registerSchema>;
