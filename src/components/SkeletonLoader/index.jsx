import React from 'react';
import './styles.scss';

const SkeletonLoader = ({columns=4, rows=14}) => {
  const placeholderElement = <span className="placeholder"></span>;
  return  (
    <div className="skeleton-loader">
      <div className="overall-data overall-data__skeleton">
        {Array(columns).fill(<div className="card placeholder"></div>)}
      </div>
      <div className="statewise-data">
        <table className="statewise-table">
          <thead className="statewise-table__head">
            <tr>
              {Array(columns).fill(<th>{placeholderElement}</th>)}
            </tr>
          </thead>
          <tbody className="statewise-table__body">
            {Array(rows).fill(
              <tr>
                {Array(columns).fill(<td>{placeholderElement}</td>)}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SkeletonLoader;