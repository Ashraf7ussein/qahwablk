import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const [isLogin, setLogin] = useState(true);
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const loginSchema = z.object({
    email: z.string().email({ message: t("invalidEmail") }),
    password: z.string().min(6, { message: t("passwordMinLength") }),
    confirmPassword: z.string().optional(),
  });

  const signupSchema = z
    .object({
      email: z.string().email({ message: t("invalidEmail") }),
      password: z.string().min(6, { message: t("passwordMinLength") }),
      confirmPassword: z.string().min(6, { message: t("passwordMinLength") }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordMismatch"),
      path: ["confirmPassword"],
    });

  const schema = isLogin ? loginSchema : signupSchema;
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const getFriendlyError = (code: string) => {
    switch (code) {
      case "auth/user-not-found":
        return t("error.userNotFound");
      case "auth/wrong-password":
        return t("error.wrongPassword");
      case "auth/invalid-email":
        return t("error.invalidEmail");
      case "auth/email-already-in-use":
        return t("error.emailInUse");
      case "auth/weak-password":
        return t("error.weakPassword");
      default:
        return t("error.unexpected");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      setAuthError("");

      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("Logged in:", userCredential.user);
        navigate("/admin");
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("Signed up:", userCredential.user);
        navigate("/admin");
      }
    } catch (error: any) {
      console.error("Auth Error:", error.code, error.message);
      setAuthError(getFriendlyError(error.code));
    }
  };

  return (
    <div className="pt-30 pb-10 bg-white min-h-screen flex flex-col justify-center items-center px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        {isLogin ? t("login") : t("signup")}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md px-8 py-6 bg-white rounded shadow-md"
      >
        {/* Email Field */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            {t("email")}
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full p-2.5 rounded border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-1" htmlFor="password">
            {t("password")}
          </label>
          <div className="relative flex items-center">
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              {...register("password")}
              className="w-full p-2.5 pr-10 rounded border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {passwordVisible ? (
              <FaEye
                size={18}
                color="gray"
                className="absolute right-3 cursor-pointer"
                onClick={() => setPasswordVisibility(!passwordVisible)}
              />
            ) : (
              <FaEyeSlash
                size={18}
                color="gray"
                className="absolute right-3 cursor-pointer"
                onClick={() => setPasswordVisibility(!passwordVisible)}
              />
            )}
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password Field (Signup Only) */}
        {!isLogin && (
          <div className="mb-5">
            <label
              className="block text-gray-700 mb-1"
              htmlFor="confirmPassword"
            >
              {t("confirmPassword")}
            </label>
            <div className="relative flex items-center">
              <input
                id="confirmPassword"
                type={passwordVisible ? "text" : "password"}
                {...register("confirmPassword")}
                className="w-full p-2.5 pr-10 rounded border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {passwordVisible ? (
                <FaEye
                  size={18}
                  color="gray"
                  className="absolute right-3 cursor-pointer"
                  onClick={() => setPasswordVisibility(!passwordVisible)}
                />
              ) : (
                <FaEyeSlash
                  size={18}
                  color="gray"
                  className="absolute right-3 cursor-pointer"
                  onClick={() => setPasswordVisibility(!passwordVisible)}
                />
              )}
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        )}

        {/* Auth Error Message */}
        {authError && (
          <p className="text-red-500 text-sm text-center mb-4">{authError}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition hover:cursor-pointer"
        >
          {isLogin ? t("login") : t("signup")}
        </button>

        {/* Switch Mode */}
        <p className="mt-4 text-sm text-gray-600 text-center">
          {isLogin ? t("noAccount") : t("hasAccount")}{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline hover:cursor-pointer"
            onClick={() => setLogin(!isLogin)}
          >
            {isLogin ? t("signup") : t("login")}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
