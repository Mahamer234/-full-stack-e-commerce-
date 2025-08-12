import { useState, useEffect } from "react";
import { actRegister } from "../store/auth/authSlice";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterFormData,
} from "../validations/registerSchema";
import Input from "../components/Form/Input";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<RegisterFormData>({
    /*     mode: "onBlur",
     */
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (
    data: RegisterFormData
  ) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => {
        navigate("/login");
        toast.success("Registration successful! Please log in.");
      });
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/"); //   سيتم التوجيه بعد الريندر الأول
    }
  }, [accessToken, navigate]);

  if (accessToken) {
    return null; //   يمنع ظهور محتوى login لو المستخدم مسجل دخول
  }

  return (
    <div className="flex flex-col items-center justify-center py-4 bg-gray-100">
      <h3 className="text-3xl mb-6 font-serif font-semibold"> Sign Up</h3>
      <form
        className="flex flex-col gap-4 sm:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          className="outline-none border border-green-700 rounded px-2 py-4"
          type="text"
          placeholder="First Name"
          {...register("firstName")}
          error={errors.firstName?.message}
        />

        <Input
          className="outline-none border border-green-700 rounded px-2 py-4"
          type="text"
          placeholder="Last Name"
          {...register("lastName")}
          error={errors.lastName?.message}
        />

        <Input
          className="outline-none border border-green-700 rounded px-2 py-4"
          type="email"
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
        />

        <div className="relative">
          <Input
            className="outline-none border border-green-700 rounded px-2 py-4 w-full"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
            error={errors.password?.message}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>

        <Input
          className="outline-none border border-green-700 rounded px-2 py-4"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <button
          type="submit"
          className="bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
