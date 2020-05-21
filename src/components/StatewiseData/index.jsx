import React from 'react';
import DistrictwiseData from '../DistrictwiseData';
import { useFetch } from '../../customHooks/useFetch';
import { API_BASE_URL } from '../../constants';
import './styles.scss';
import OverallData from '../OverallData';
import TimelineChart from '../TimelineChart';

const StatewiseData = ({statewiseData}) => {
  const {
    response: districtwiseData,
    error: districtwiseError,
    loading: districtwiseLoading
  } = useFetch(`${API_BASE_URL}/state_district_wise.json`);

  const [activeState, setActiveState]= React.useState(null);

  const handleStateActiveState = (statecode) => {
    const updatedActiveState = statecode === activeState ? null : statecode;

    setActiveState(updatedActiveState);
  }

  const isStatewiseDataExist = !!statewiseData && !!statewiseData.statewise;

  const overallData = isStatewiseDataExist ? statewiseData.statewise.find(({statecode}) => statecode === 'TT') : {};

  const timeSeriesData = !!statewiseData ? statewiseData.cases_time_series : [];

  return (
    <React.Fragment>
      <OverallData overallData={overallData} />
      <TimelineChart timeline={timeSeriesData} />
      <p><small>* click on state for district data</small></p>
      <div className="statewise-data">
        <table className="statewise-table">
          <thead className="statewise-table__head">
            <tr>
              <th className="state-name head">state</th>
              <th>confirmed</th>
              <th>active</th>
              <th>recovered</th>
              <th>deceased</th>
            </tr>
          </thead>
          <tbody className="statewise-table__body">
          {
            isStatewiseDataExist ? statewiseData.statewise.map(({
              state, active, confirmed, recovered, deaths, statecode, deltaconfirmed, deltarecovered, deltadeaths
              }) => {
              if (statecode === 'TT') return;

              const isDistrictDataExist = !districtwiseLoading && !!districtwiseData && !!districtwiseData[state];

              const districtData = isDistrictDataExist ? districtwiseData[state]['districtData'] : {};

              const iscurrentDistrictActive = !!activeState && activeState === statecode;

              return (
                <React.Fragment key={statecode}>
                  <tr>
                    <td className={`state-name ${isDistrictDataExist ? 'district-data-exist' : ''}`}>
                      <div onClick={() => handleStateActiveState(statecode)}>
                        {isDistrictDataExist && <span className="toggle-icon">{iscurrentDistrictActive ? '-' : '+'}</span>}
                        <span>{state}</span>
                      </div>
                    </td>
                    <td>
                      <span className="data">
                        {confirmed}
                        <small>+{deltaconfirmed}</small>
                      </span>
                    </td>
                    <td className="active">{active}</td>
                    <td className="recovered">
                      <span className="data">
                        {recovered}
                        <small>+{deltarecovered}</small>
                      </span>
                    </td>
                    <td className="deceased">
                      <span className="data">
                        {deaths}
                        <small>+{deltadeaths}</small>
                      </span>
                    </td>
                  </tr>
                {iscurrentDistrictActive &&
                    isDistrictDataExist && (
                      <tr>
                        <td colSpan={5}>
                          <DistrictwiseData districtwiseData={districtData} />
                        </td>
                      </tr>
                  )}
                </React.Fragment>
            )}) : (
              <tr>
                <td colSpan={5}>No Data Found</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
      <TimelineChart
        timeline={timeSeriesData}
        chartFor="daily"
        type="area"
      />
      <p>
        <small>Last Update At: {!!overallData ? overallData.lastupdatedtime : '-'} | <a href={window.location.href}>Reload</a></small>
      </p>
    </React.Fragment>
  )
}

export default StatewiseData;