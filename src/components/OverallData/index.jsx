import React from 'react';
import './styles.scss';

const OverallData = ({
 overallData: {confirmed, active, recovered, deaths} 
}) => (
  <div className="overall-data">
    <div className="card">
      <span className="status">confirmed</span>
      <span className="data">{confirmed || '-'}</span>
    </div>
    <div className="card">
      <span className="status">active</span>
      <span className="data active">{active || '-'}</span>
    </div>
    <div className="card">
      <span className="status">recovered</span>
      <span className="data recovered">{recovered || '-'}</span>
    </div>
    <div className="card">
      <span className="status">deceased</span>
      <span className="data deceased">{deaths || '-'}</span>
    </div>
  </div>
)

export default OverallData;