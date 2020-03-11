import React from 'react'
import './Line.css'
const Line = props => {
  return (
    <div>
      <div 
      className="line"
      style={{left: `${props.left}%`}}/>
    </div>
  )
}

export default Line
