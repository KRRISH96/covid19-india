import React from 'react';
import DistrictwiseData from '../DistrictwiseData';
import { useFetch } from '../../customHooks/useFetch';
import { API_BASE_URL } from '../../constants';
import './styles.scss';

const StatewiseData = ({statewiseData}) => {
  const {
    response: districtwiseData,
    error: districtwiseError,
    loading: districtwiseLoading
  } = useFetch(`${API_BASE_URL}/state_district_wise.json`);

  console.log({districtwiseData});

  return (
    <div className="statewise-data">
      <table className="statewise-table">
        <thead className="statewise-table__head">
          <tr>
            <th className="state-name">state</th>
            <th>confirmed</th>
            <th>active</th>
            <th>recovered</th>
            <th>deceased</th>
          </tr>
        </thead>
        <tbody className="statewise-table__body">
        {
          !!statewiseData && !!statewiseData.statewise && statewiseData.statewise.map(({state, active, confirmed, recovered, deaths, statecode}) => (
            <tr key={statecode}>
              <td className="state-name">{state}</td>
              <td>{confirmed}</td>
              <td className="active">{active}</td>
              <td className="recovered">{recovered}</td>
              <td className="deceased">{deaths}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      {districtwiseLoading ? <div>Loading...</div> : <DistrictwiseData districtwiseData={districtwiseData} />}
    </div>
  )
}

export default StatewiseData;