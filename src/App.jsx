import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./components/Display";
import Login from "./components/Login";

function App() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const storeUserName = (event) => {
    setUserName(event?.target.value);
  };

  const storeUserPassword = (event) => {
    setUserPassword(event?.target.value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              storeUserName={storeUserName}
              storeUserPassword={storeUserPassword}
              userName={userName}
              userPassword={userPassword}
            />
          }
        />
        <Route path="/display" element={<Display userName={userName} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
