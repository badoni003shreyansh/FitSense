import React from "react";
import googleIcon from "../assets/google-icon-logo-svgrepo-com.svg"; // Ensure you have a Google icon SVG or image

function GoogleSigninButton({ onClick }) {
  return (
    <div className="flex flex-col w-3/5 p-4">
      <button
        className="flex items-center justify-center gap-2 w-full px-4 py-2 text-purple-950 border border-purple-400 bg-gray-100 rounded-lg hover:outline-none hover:ring-2 hover:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => {
          onClick();
        }}
      >
        <img src={googleIcon} height={20} width={20} />
        Sign in with Google
      </button>
    </div>
  );
}

export default GoogleSigninButton;
