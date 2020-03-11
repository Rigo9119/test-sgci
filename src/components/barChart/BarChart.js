import React, { Component } from 'react';
import './BarChart.css'

import Line from './Line';
import Yaxis from './Yaxis';
import Bar from './Bar'


class BarChart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  renderLines() {
    return Array(10).fill(null).map((element, index) => (
      <Line left={index * 10} key={index}/>
    )) 
  }

  renderBars() {
    const dates = this.props.dates;

    return dates.map(date => {
      const percent = (date.x  * 10);
      return (
        <Bar percent={percent} key={date.y}/>
      )
    })
  }
  render() {
    return (
      <div className="graphWrapper">
        <div className="graph">
          <Yaxis dates={this.props.dates}/>
          <div className="lines-container">
            {this.renderLines()}
            {this.renderBars()}
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;
