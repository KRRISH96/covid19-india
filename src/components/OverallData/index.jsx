import React from 'react';
import './styles.scss';

const OverallData = () => (
  <div className="overall-data">
    <div className="card">
      <span className="status">confirmed</span>
      <span className="data">11234</span>
    </div>
    <div className="card">
      <span className="status">active</span>
      <span className="data active">11234</span>
    </div>
    <div className="card">
      <span className="status">recovered</span>
      <span className="data recovered">11234</span>
    </div>
    <div className="card">
      <span className="status">deceased</span>
      <span className="data deceased">11234</span>
    </div>
  </div>
)

export default OverallData;