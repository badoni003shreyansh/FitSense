import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import {
  dosignInWithEmailAndPassword,
  dosignInWithGoogle,
} from "../firebase/auth";
import FormInput from "./FormInput";
import GoogleSigninButton from "./GoogleSigninButton";

function LoginForm() {
  const { isLoggedIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Form submitted with data:", data);
      await dosignInWithEmailAndPassword(data.email, data.password).catch(
        (error) => {
          alert("Wrong username or password!!");
        }
      );
    } catch (error) {
      console.error("Email/Password Sign-In Error:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await dosignInWithGoogle();
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="w-full max-w-lg h-full p-6 flex flex-col items-center justify-center bg-white rounded-3xl shadow-md">
      <h2 className="text-4xl font-bold mb-4 text-purple-950">Log In</h2>
      <form
        className="w-full flex flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          type="email"
          register={register}
          errors={errors}
          name="email"
          label="Email"
          placeholder="Enter your email"
          labelClass="text-purple-950 font-semibold"
          pattern={{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          }}
        />

        <FormInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          errors={errors}
          name="password"
          labelClass="text-purple-950 font-semibold"
          pattern={{
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "Password must be at least 8 characters long and contain at least one letter and one number",
          }}
          minLength={{
            value: 8,
            message: "Password must be at least 8 characters",
          }}
          maxLength={{
            value: 20,
            message: "Password cannot exceed 20 characters",
          }}
        />

        <button
          type="submit"
          className="btn-primary py-2 px-4 bg-purple-950 text-white rounded-3xl hover:bg-purple-800 transition-colors duration-300"
        >
          Submit
        </button>
      </form>

      <hr className="w-9/12 border-t-2 border-gray-300 my-4" />

      <GoogleSigninButton onClick={handleGoogleSignIn} />
      <Link
        to="/signup"
        className="text-purple-700 hover:underline font-medium text-sm"
      >
        Don't have an account?
      </Link>
    </div>
  );
}

export default LoginForm;
