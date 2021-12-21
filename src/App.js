/* eslint-disable no-undef */
import logo from './logo.svg';
import React, {useEffect} from "react";
import './App.css';

import axios from "axios"

export async function envAPI(url) {
  try {
    const response = await axios({
      url: `https://rickandmortyapi.com/api/${url}`,
      method:`GET`,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

function App() {
  useEffect(() => {
    async function loadapi() {
        const resp = await Response("all");
        const data = resp?.data;
        HandleApiData (data);
    }
    loadapi();
    return function cleanup() {
        loadapi();
    }
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
