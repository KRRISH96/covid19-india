import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useFetch } from './customHooks/useFetch';
import StatewiseData from './components/StatewiseData';
import { API_BASE_URL } from './constants';
import SkeletonLoader from './components/SkeletonLoader';

function App() {
  const {
    response: statewiseData,
    error: statewiseError,
    loading: statewiseLoading
  } = useFetch(`${API_BASE_URL}/data.json`)

  return (
    <div className="App">
      <header className="App-header">
        COVID-19 India
      </header>
      <main className="App-main">
      <SkeletonLoader />
      {
        statewiseLoading ? <div>Loading...</div> : <StatewiseData statewiseData={statewiseData} />
      }
      <p>Source: <a href="https://documenter.getpostman.com/view/10724784/SzYXXKmA?version=latest" target="_blank">COVID 19-India API </a></p>
      </main>
      <footer className="App-footer">
        <p>Developed by <a href="https://www.linkedin.com/in/kskp1996/">Sai Krishna Prasad K</a></p>
      </footer>
    </div>
  );
}

export default App;
