import React from 'react';
import './Yaxis.css'

const Xaxis = (props) => {
  const dates = props.dates;
  return (
    <div className="y-axis">
      {
        dates.map((date,index) => (
          <div className="y-axis-item" key={index}>
            {date.y}
          </div>
        ))
      }
    </div>    
  );
}

export default Xaxis;
