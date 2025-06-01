import React from "react";

function Alert({ message }) {
  return (
    <div className="fixed top-2.5 alert alert-warning z-auto">{message}</div>
  );
}

export default Alert;
