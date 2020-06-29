import React, {useState} from 'react';
import { LineChart, AreaChart } from 'react-chartkick'
import 'chart.js'
import './styles.scss';

const TIMELINE_PERIODS ={
  0: 'All',
  7: "7 Days",
  30: "30 Days",
  60: "60 Days",
  90: "90 Days",
}

const TimelineChart = ({timeline, chartFor='total', type="line"}) => {
  const [activePeriod, setActivePeriod] = useState(30);

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
    <React.Fragment>
      <ul className="period-list">
        {Object.keys(TIMELINE_PERIODS).map(period => (
          <li key={period} onClick={() => setActivePeriod(period)} className={`${Number(period) === Number(activePeriod) ? 'period-active' : ''}`}>{TIMELINE_PERIODS[period]}</li>
        ))}
      </ul>
      <div className="timeline-chart-wrapper">
        <ChartType data={data} colors={colors} title={`${chartFor} cases`} />
      </div>
    </React.Fragment>
  )
}

export default TimelineChart;