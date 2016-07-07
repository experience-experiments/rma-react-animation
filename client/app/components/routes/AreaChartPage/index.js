import React from 'react'
import { AreaChart } from 'react-easy-chart'
import Navigation from '../../navigation'

import areaChart from './areaChart'

const count = (areaChart.length - 1)

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
    console.log('AreaChart')

    const {
      index
    } = this.state

    const {
      data
    } = areaChart[index]

    return (
      <section>
        <header>
          <h1>Area Chart ({index})</h1>
        </header>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <AreaChart
          data={data}
        />
        <Navigation />
      </section>
    )
  }
}
