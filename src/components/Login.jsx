import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({
  storeUserName,
  storeUserPassword,
  userName,
  userPassword,
}) => {
  const nav = useNavigate();

  const validate = () => {
    if (userName.length === 0) {
      alert("User Name is empty");
      return false;
    }
    if (userPassword.length === 0) {
      alert("Password should not be empty");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      nav("/display");
    }
  };

  return (
    <form
      className="loginForm"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label className="userNameLabel" htmlFor="userNameId">
        User Name:
      </label>
      <input
        id="userNameId"
        className="userName"
        placeholder="Enter your Name Here..."
        onChange={(e) => {
          storeUserName(e);
        }}
      />

      <label className="userPasswordLabel" htmlFor="passwordId">
        Password:
      </label>
      <input
        id="passwordId"
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
