import React, { useState } from 'react';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString(); 
  const [CTime,SetCTime] = useState(time);
  const updateTime = () =>{
    time = new Date().toLocaleTimeString(); 
    SetCTime(time);
  }
  setInterval(updateTime,1000)
  return (
    <div>
      <h1>{CTime}</h1>
    </div>
  );
}

export default App;
