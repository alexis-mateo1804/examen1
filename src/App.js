/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import logo from './logo.svg';
import React, {useEffect, useState} from "react";
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
  const [dataRick, setDataRick] = useState(null);
  const [personajes, setPersonajes] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const response = async (name) => envAPI(name);
  useEffect(() => {
    async function loadapi() {
        const resp = await response("character");
        const data = resp?.data;
        setDataRick(data);   
    }
    loadapi();
    return function cleanup() {
        loadapi();
    }
  }, []);

  useEffect(() => {
    console.log(dataRick);
    if (dataRick !== null) {
      setPersonajes(dataRick.results);
      console.log(dataRick?.results[0].image);
      console.log(personajes);
    }
  }, [dataRick]);

  useEffect(() => {
    console.log(personajes);
  }, [personajes]);

  const valor = 5;
  
  return (
    <div className="App">
      <header className="App-header">
        
        {personajes.length !== 0 && 
          personajes.map((item, index) => {
            console.log(item)
            return (
              <div key={index}>
                <img src={item.image} className="App-logo" alt="logo" />
                <p>{item.name}</p>
                <p>Especie: {item.species}</p>
              </div>
              
            );
          })}

      </header>
    </div>
  );
}

export default App;
