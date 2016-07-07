import React from 'react'
import { BarChart } from 'react-easy-chart'
import Navigation from '../../navigation'

import barChart from './barChart'

const count = (barChart.length - 1)

export default class extends React.Component {
  state = {
    index: 0
  }

  handleClick = () => {
    const {
      index
    } = this.state

    this.setState({ index: (index === count) ? 0 : index + 1 })
  }

  render () {
    console.log('BarChart')

    const {
      index
    } = this.state

    const {
      data,
      lineData,
      height,
      width,
      xType,
      yType,
      tickTimeDisplayFormat,
      xDomainRange,
    } = barChart[index]

    return (
      <section>
        <header>
          <h1>Bar Chart ({index})</h1>
        </header>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <BarChart
          data={data}
          lineData={lineData}
          height={height}
          width={width}
          xType={xType}
          yType={yType}
          tickTimeDisplayFormat={tickTimeDisplayFormat}
          xDomainRange={xDomainRange}
        />
        <Navigation />
      </section>
    )
  }

}
