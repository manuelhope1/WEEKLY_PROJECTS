import React from "react";
import img1 from "../assets/404.webp";

const Error = () => {
  return (
    <div className="err">
      <img src={img1} className="errimg" alt="error" />
    </div>
  );
};

export default Error;
