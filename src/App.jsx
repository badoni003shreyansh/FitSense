import "./App.css";
import FormAnswer from "./components/FormAnswer";
import FormWrapper from "./components/FormWrapper";
import { getResponsefromGem } from "./handlerAi";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
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
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full gap-8 p-16 pt-32 bg-gray-50">
      <h1 className="text-8xl font-extrabold text-purple-700 text-shadow-purple-700 tracking-tight drop-shadow-lg">
        FitSense
      </h1>
      <h3 className="text-3xl font-medium text-gray-600 mb-4">
        The AI fitness navigator for you
      </h3>
      {error && <Alert message={error} />}
      {/* Form */}
      <FormWrapper onSubmit={onSubmit} loading={loading} />

      {/* Answer below */}
      {answer && <FormAnswer answers={answer} />}
    </div>
  );
}

export default App;
