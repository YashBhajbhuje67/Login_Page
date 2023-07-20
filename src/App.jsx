import { useState } from 'react'

import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Display from './components/Display';

function App() {
  const [userName, setUserName] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const storeUserName = (event) => {
    setUserName(event?.target.value);
  };

  const storeUserPassword = (event) => {
    setUserPassword(event?.target.value);
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login storeUserName={storeUserName} storeUserPassword={storeUserPassword}/>}/>
      <Route path='/display' element={<Display userName={userName}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
