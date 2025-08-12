import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInFormData } from "../validations/singIn";
import Input from "../components/Form/Input";

import { actLogin } from "../store/auth/authSlice";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { error, loading, accessToken } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  // استخدام useForm من react-hook-form مع zodResolver للتحقق من صحة البيانات

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  /* -------------- handle submit --------------- */
  const onsubmit: SubmitHandler<SignInFormData> = async (data) => {
    dispatch(actLogin(data))
      .unwrap()
      .then(() => {
        toast.success("Login successful!");
        navigate("/");
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
    <div className="flex flex-col items-center justify-center py-4 bg-gray-100  h-[calc(100vh-150px)]">
      <h3 className="text-3xl mb-6 font-serif font-semibold"> Login Page</h3>

      <form
        className="flex flex-col gap-4 md:w-1/2"
        onSubmit={handleSubmit(onsubmit)}
      >
        <Input
          className="outline-none border border-green-700 rounded px-2 py-4"
          type="text"
          placeholder="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <div className="relative">
          <Input
            className="outline-none border border-green-700 rounded px-2 py-4"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <button
            onClick={() => setShowPassword((prev: boolean) => !prev)}
            className="absolute right-4 top-4"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>
        {error && <p>{error}</p>}
        <button
          type="submit"
          disabled={loading === "pending" ? true : false}
          className={clsx(
            "bg-green-700 text-white py-2 rounded hover:bg-green-800",
            loading === "pending" && "opacity-50 "
          )}
        >
          {loading === "pending" ? (
            <div className="flex justify-center gap-8 items-center">
              <div className="h-4 w-4 border-2 p-2  border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Login loading ...</span>
            </div>
          ) : (
            "login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
