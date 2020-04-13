import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useFetch } from './customHooks/useFetch';
import StatewiseData from './components/StatewiseData';
import { API_BASE_URL } from './constants';

function App() {
  const {
    response: statewiseData,
    error: statewiseError,
    loading: statewiseLoading
  } = useFetch(`${API_BASE_URL}/data.json`)

  return (
    <div className="App">
      <header className="App-header">
        Covid-19 India
      </header>
      <main className="App-main">
        <StatewiseData statewiseData={statewiseData}/>
      </main>
      <footer className="App-footer">
        <p>Developed by <a href="https://www.linkedin.com/in/kskp1996/">Sai Krishna Prasad K</a></p>
      </footer>
    </div>
  );
}

export default App;
