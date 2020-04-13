import React from 'react';
import DistrictwiseData from '../DistrictwiseData';
import { useFetch } from '../../customHooks/useFetch';
import { API_BASE_URL } from '../../constants';

const StatewiseData = ({statewiseData}) => {
  const {
    response: districtwiseData,
    error: districtwiseError,
    loading: districtwiseLoading
  } = useFetch(`${API_BASE_URL}/state_district_wise.json`);

  console.log({districtwiseData});

  return (
    <div>
      Table Here - State - Confirmed - Active - Recovered - Deaths
      <DistrictwiseData districtwiseData={districtwiseData}/>
    </div>
  )
}

export default StatewiseData;