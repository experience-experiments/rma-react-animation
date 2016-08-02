import React from 'react'
import ChartPage from '../ChartPage'
import { BrokenLineChart } from 'react-easy-chart'
import Navigation from '../../../navigation'

import brokenLineChart from './brokenLineChart'

const count = (brokenLineChart.length - 1)

export default class extends ChartPage {
  state = {
    index: 0,
    count
  }

  render () {
    console.log('BrokenLineChartPage')

    const {
      index,
      count
    } = this.state

    return (
      <section>
        <header>
          <h1>Linear Chart ({index} to {count})</h1>
        </header>
        <BrokenLineChart {...brokenLineChart[index]} />
        <Navigation />
      </section>
    )
  }

}
