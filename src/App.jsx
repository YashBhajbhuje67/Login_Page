import { useState } from 'react'

import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Main">

        <label className="userNameLabel">User Name:</label>
        <input className="userNameInput" />
      
        <label className="userPasswordLabel">Password:</label>
        <input className="userPasswordInput" type="password" />

    </div>
  );
}

export default App
