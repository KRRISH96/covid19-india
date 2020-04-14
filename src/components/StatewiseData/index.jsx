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

  const [activeState, setActiveState]= React.useState(null);

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
          !!statewiseData && !!statewiseData.statewise && statewiseData.statewise.map(({state, active, confirmed, recovered, deaths, statecode}) => {
            const isDistrictDataExist = !districtwiseLoading && !!districtwiseData && !!districtwiseData[state];

            const districtData = isDistrictDataExist ? districtwiseData[state]['districtData'] : {};

            const iscurrentDistrictActive = !!activeState && activeState === statecode;

            return (
              <React.Fragment key={statecode}>
                <tr>
                  <td className={`state-name ${isDistrictDataExist ? 'district-data-exist' : ''}`}>
                    <div onClick={() => setActiveState(statecode)}>
                      {isDistrictDataExist && <span>{iscurrentDistrictActive ? '-' : '+'}</span>}
                      {state}
                    </div>
                  </td>
                  <td>{confirmed}</td>
                  <td className="active">{active}</td>
                  <td className="recovered">{recovered}</td>
                  <td className="deceased">{deaths}</td>
                </tr>
               {iscurrentDistrictActive &&
                  isDistrictDataExist && (
                    <tr>
                      <td className="state-name"></td>
                      <td colSpan={4}>
                        <DistrictwiseData districtwiseData={districtData} />
                      </td>
                    </tr>
                )}
              </React.Fragment>
          )})
        }
        </tbody>
      </table>
    </div>
  )
}

export default StatewiseData;