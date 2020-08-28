import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[message, setMessage] = useState("");

  useEffect(() => {
    fetch('/list')
      .then(response => response.text())
      .then(message => {
          setMessage(message);
      });
  },[])
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="App-intro">
        
        <code>{message}</code> Reload.
      </p>
    </div>
  );
}

export default App;
