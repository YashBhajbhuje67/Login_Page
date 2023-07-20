import React from "react";
import { useNavigate } from "react-router-dom";


const Login = ({storeUserName, storeUserPassword}) => {
  
  const nav = useNavigate();
  
  const handleSubmit = () => {nav('/display')};

  return (
    <div className="Main">
      <label className="userNameLabel">User Name:</label>
      <input
        className="userName"
        onChange={(e) => {
          storeUserName(e);
        }}
      />

      <label className="userPasswordLabel">Password:</label>
      <input
        className="userPassword"
        type="password"
        onChange={(event) => {
          storeUserPassword(event);
        }}
      />

      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
