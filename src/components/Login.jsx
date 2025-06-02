import React from "react";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen w-full gap-8 p-16 pt-32"
      style={{
        background: `linear-gradient(to bottom, #d2b4de, #a569bd, #8e44ad, #5b2c87, #2d1b47, #0d051a)`,
      }}
    >
      <LoginForm />
      <div className="text-gray-500 text-sm mt-4">
        <p>Made with ❤️ by Shreyansh Badoni</p>
      </div>
    </div>
  );
}

export default Login;
