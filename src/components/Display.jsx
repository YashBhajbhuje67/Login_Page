import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Display.css";

const Display = ({ userName }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (userName.length == 0) {
      alert("User Name is empty !");
      nav("/");
    }
  }, []);
  return <div className="display">Welcome {userName} !</div>;
};

export default Display;
