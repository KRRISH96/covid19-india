import React from 'react';
import { AreaChart } from 'react-chartkick'
import 'chart.js'
import './styles.scss';

const TimelineChart = ({timeline}) => {
  let data = [
    { name: 'Confirmed', data: {} },
    { name: 'Recovered', data: {} },
    { name: 'Deceased', data: {} },
  ];

  let confirmedData = {};
  let recoveredData = {};
  let deceasedData = {};

  const colors = ["#ffffff", "#4dd599", "#fd7792"];

  if (!!timeline) {
    timeline.forEach(({date, totalconfirmed, totalrecovered, totaldeceased}) => {
      if (totalconfirmed > 0) {
        const dateWithYear = `${date}2020`
        confirmedData[dateWithYear] = totalconfirmed
        recoveredData[dateWithYear] = totalrecovered
        deceasedData[dateWithYear] = totaldeceased
      }
    })

    data = [
      { name: 'Confirmed', data: confirmedData },
      { name: 'Recovered', data: recoveredData },
      { name: 'Deceased', data: deceasedData },
    ]
  }

  return (
    <div className="timeline-chart-wrapper">
      <AreaChart data={data} colors={colors} />
    </div>
  )
}

export default TimelineChart;