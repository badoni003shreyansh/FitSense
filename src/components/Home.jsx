import FormAnswer from "./FormAnswer";
import FormWrapper from "./FormWrapper";
import { getResponsefromGem } from "../handlerAi";
import React, { useState } from "react";
import Alert from "./Alert";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { dosignOut } from "../firebase/auth";

function Home() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    setLoading(true);
    setAnswer("");
    getResponsefromGem(data)
      .then((response) => {
        setAnswer(response);
      })
      .catch((error) => {
        console.log("Error:", error);
        setError(
          error?.reponse?.data?.message ||
            "An error occurred while processing your request. Please try again later."
        );
        setAnswer("");
        async function resetError() {
          await new Promise((resolve) => setTimeout(resolve, 4000));
          setError("");
        }
        resetError();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    dosignOut()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
      });
  };
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen w-full gap-8 p-16 pt-32"
      style={{
        background: `linear-gradient(to bottom, #d2b4de, #a569bd, #8e44ad, #5b2c87, #2d1b47, #0d051a)`,
      }}
    >
      {!isLoggedIn && <Navigate to="/login" replace />}
      <button
        className="btn-secondary absolute right-2 top-2 rounded-3xl px-4 py-2 text-sm font-semibold text-white bg-purple-950 hover:bg-purple-800 transition-colors duration-300"
        onClick={handleLogout}
      >
        Log Out
      </button>
      <h1 className="text-8xl font-extrabold text-[#46206f] tracking-tight drop-shadow-lg">
        TrainWise
      </h1>

      <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-2xl text-center mt-4">
        Your Digital Coach for Real-World Gains
      </p>
      {error && <Alert message={error} />}
      {/* Form */}
      <FormWrapper onSubmit={onSubmit} loading={loading} />

      {/* Answer below */}
      {answer && <FormAnswer answers={answer} />}
      <div className="text-gray-500 text-sm mt-4">
        <p>Made with ❤️ by Shreyansh Badoni</p>
      </div>
    </div>
  );
}

export default Home;
