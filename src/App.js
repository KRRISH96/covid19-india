import React from 'react';
import SkeletonLoader from './components/SkeletonLoader';
import StatewiseData from './components/StatewiseData';
import { useFetch } from './customHooks/useFetch';
import { API_BASE_URL } from './constants';
import './App.scss';

function App() {
  const {
    response: statewiseData,
    error: statewiseError,
    loading: statewiseLoading
  } = useFetch(`${API_BASE_URL}/data.json`)

  return (
    <div className="App">
      <header className="App-header">
        <a href={window.location.href}>COVID-19 <span role="img" aria-label="indian-flag-emoji">🇮🇳</span> India</a>
      </header>
      <main className="App-main">
      {
        statewiseLoading ? <SkeletonLoader /> : (
          <React.Fragment>
            <StatewiseData statewiseData={statewiseData} />
            <p>
              Source: <a href="https://documenter.getpostman.com/view/10724784/SzYXXKmA?version=latest" target="_blank" rel="noopener noreferrer">COVID 19-India API</a>
            </p>
          </React.Fragment>
        )
      }
      </main>
      <footer className="App-footer">
        <p>Developed by <a href="https://www.linkedin.com/in/kskp1996/">Sai Krishna Prasad K</a></p>
      </footer>
    </div>
  );
}

export default App;
