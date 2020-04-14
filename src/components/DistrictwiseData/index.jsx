import React from 'react';

const DistrictwiseData = ({districtwiseData}) => (
    <div className="districtwise-data">
      <table className="districtwise-table">
        <thead className="districtwise-table__head">
          <tr>
            <th className="district-name head">district</th>
            <th>confirmed</th>
          </tr>
        </thead>
        <tbody className="districtwise-table__body">
        {
          !!districtwiseData && Object.entries(districtwiseData).map(([district, {confirmed}]) => (
                <tr key={district}>
                  <td className="district-name">
                    {district}
                  </td>
                  <td>{confirmed}</td>
                </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )

export default DistrictwiseData;