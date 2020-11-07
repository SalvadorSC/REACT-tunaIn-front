import React from "react";
import "./MensajeError.css";

export const MensajeError = ({ flag }) => {
  return (
    <>
      <p className={flag ? "error" : "hidden"}>⚠️ {flag && flag}</p>
    </>
  );
};
