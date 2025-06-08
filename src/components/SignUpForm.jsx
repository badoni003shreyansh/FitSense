import React from "react";
import { Form, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { dosignUpWithEmailAndPassword } from "../firebase/auth";
import { useAuth } from "../contexts/authContext";
import { Link } from "react-router-dom";
const SignUpForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await dosignUpWithEmailAndPassword(data.email, data.password).then(() => {
        setIsLoggedIn(true);
      });
    } catch (error) {
      alert("Sign-Up Error!!");
    }
  };
  if (isLoggedIn) {
    return <Navigate to="/home" replace />;
  }
  return (
    <div className="w-full max-w-lg h-full p-6 flex flex-col items-center justify-center bg-white rounded-3xl shadow-md">
      <h2 className="text-4xl font-bold mb-4 text-purple-950">Sign Up</h2>
      <form
        className="w-full flex flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          type="text"
          name="username"
          label="Username"
          placeholder="Enter your username"
          labelClass="text-purple-950 font-semibold"
          register={register}
          errors={errors}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          labelClass="text-purple-950 font-semibold"
          register={register}
          errors={errors}
          pattern={{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          }}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          labelClass="text-purple-950 font-semibold"
          register={register}
          errors={errors}
          pattern={{
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must be at least 8 characters long and contain letters, numbers, and symbols",
          }}
          minLength={{
            value: 8,
            message: "Password must be at least 8 characters",
          }}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Re-enter your password"
          labelClass="text-purple-950 font-semibold"
          register={register}
          errors={errors}
          pattern={{
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must be at least 8 characters long and contain letters, numbers, and symbols",
          }}
          minLength={{
            value: 8,
            message: "Password must be at least 8 characters",
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
      <Link
        to="/login"
        className="text-purple-700 hover:underline font-medium text-sm"
      >
        Already an account?
      </Link>
    </div>
  );
};

export default SignUpForm;
