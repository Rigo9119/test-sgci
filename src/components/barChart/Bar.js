import React from 'react';
import './Bar.css';
const Bar = (props) => {
  return (
    <div className="bar" style={{width: `${props.percent}%`}} />
  );
}

export default Bar;
