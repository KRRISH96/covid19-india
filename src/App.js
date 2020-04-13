import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useFetch } from './customHooks/useFetch';

const API_BASE_URL = "https://api.covid19india.org";

function App() {
  const statewiseData = useFetch(`${API_BASE_URL}/data.json`)
  const districtwiseData = useFetch(`${API_BASE_URL}/state_district_wise.json`)
console.log({statewiseData, districtwiseData})

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
      <main>

      </main>
    </div>
  );
}

export default App;
