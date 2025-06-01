import React from "react";
import ReactMarkdown from "react-markdown";

function FormAnswer({ answers }) {
  return (
    <div className="flex flex-col max-w-5xl w-full card rounded-2xl shadow-lg p-6 bg-white">
      <p className="text-base leading-relaxed text-gray-800 text-wrap">
        <ReactMarkdown>{answers}</ReactMarkdown>
      </p>
    </div>
  );
}

export default FormAnswer;
