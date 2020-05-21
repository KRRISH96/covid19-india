import React from 'react';
import './styles.scss';

const OverallData = ({
 overallData: {
   confirmed, active, recovered, deaths, deltaconfirmed, deltadeaths, deltarecovered
  }
}) => (
  <div className="overall-data">
    <div className="card">
      <span className="status">confirmed</span>
      <span className="data">
        <b>{confirmed || '-'}</b>
        <small>+{deltaconfirmed}</small>
      </span>
    </div>
    <div className="card">
      <span className="status">active</span>
      <span className="data active">
        <b>{active || '-'}</b>
      </span>
    </div>
    <div className="card">
      <span className="status">recovered</span>
      <span className="data recovered">
        <b>{recovered || '-'}</b>
        <small>+{deltarecovered}</small>
      </span>
    </div>
    <div className="card">
      <span className="status">deceased</span>
      <span className="data deceased">
        <b>{deaths || '-'}</b>
        <small>+{deltadeaths}</small>
      </span>
    </div>
  </div>
)

export default OverallData;