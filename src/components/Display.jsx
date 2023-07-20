import React from 'react'
import './Display.css';

const Display = ({userName}) => {
  return (
    <div className='display'>Welcome {userName} !</div>
  )
}

export default Display