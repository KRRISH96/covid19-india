import React from 'react';
import { LineChart } from 'react-chartkick'
import 'chart.js'
import './styles.scss';

const TimelineChart = ({timeline}) => {
  let data = [
    { name: 'Confirmed', data: {"Hi": 10, "Hello": 100} },
    { name: 'Active', data: {"Hi": 9, "Hello": 80} },
    { name: 'Recovered', data: {"Hi": 4, "Hello": 50} },
    { name: 'Deceased', data: {"Hi": 2, "Hello": 10} },
  ];

  const colors = ["#ffffff", "#ffdc34", "#4dd599", "#fd7792"];

  if (!!timeline) {
    
  }

  return (
    <div className="timeline-chart-wrapper">
      <LineChart data={data} colors={colors} />
    </div>
  )
}

export default TimelineChart;