import React from 'react'
import ChartPage from '../ChartPage'
import { LineChart } from 'react-easy-chart'
import Navigation from '../../../navigation'

import lineChart from './lineChart'

const count = (lineChart.length - 1)

export default class extends ChartPage {
  state = {
    index: 0,
    count: count
  }

  render () {
    console.log('LineChart')

    const {
      index,
      count
    } = this.state

    return (
      <section>
        <header>
          <h1>Line Chart ({index} to {count})</h1>
        </header>
        <LineChart {...lineChart[index]} />
        <Navigation />
      </section>
    )
  }

}
