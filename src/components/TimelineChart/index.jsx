import React from 'react';
import { LineChart, AreaChart } from 'react-chartkick'
import 'chart.js'
import './styles.scss';

const TimelineChart = ({timeline, chartFor='total', type="line"}) => {
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
    timeline.forEach(day => {
      const dateWithYear = `${day['date']}2020`
        confirmedData[dateWithYear] = day[`${chartFor}confirmed`]
        recoveredData[dateWithYear] = day[`${chartFor}recovered`]
        deceasedData[dateWithYear] = day[`${chartFor}deceased`]
    })

    data = [
      { name: 'Confirmed', data: confirmedData },
      { name: 'Recovered', data: recoveredData },
      { name: 'Deceased', data: deceasedData },
    ]
  }

  const ChartType = type === 'area' ? AreaChart : LineChart;

  return (
    <div className="timeline-chart-wrapper">
      <ChartType data={data} colors={colors} title={`${chartFor} cases`} />
    </div>
  )
}

export default TimelineChart;