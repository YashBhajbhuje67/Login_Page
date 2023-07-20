import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";


const Login = ({storeUserName, storeUserPassword}) => {
  
  const nav = useNavigate();

  const handleSubmit = () => {nav('/display')};

  return (
    <form
      className="loginForm"
      onSubmit={() => {
        handleSubmit();
      }}
    >
      <label className="userNameLabel">User Name:</label>
      <input
        className="userName"
        placeholder="Enter your Name Here..."
        onChange={(e) => {
          storeUserName(e);
        }}
      />

      <label className="userPasswordLabel">Password:</label>
      <input
        className="userPassword"
        type="password"
        placeholder="Enter your Password Here..."
        onChange={(event) => {
          storeUserPassword(event);
        }}
      />

      <input className="submitButton" type="submit" />
    </form>
  );
};

export default Login;
