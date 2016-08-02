import React from 'react'
import ChartPage from '../ChartPage'
import { BarChart } from 'react-easy-chart'
import Navigation from '../../../navigation'

import barChart from './barChart'

const count = (barChart.length - 1)

export default class extends ChartPage {
  state = {
    index: 0,
    count
  }

  render () {
    console.log('BarChart')

    const {
      index,
      count
    } = this.state

    return (
      <section>
        <header>
          <h1>Bar Chart ({index} to {count})</h1>
        </header>
        <BarChart {...barChart[index]} />
        <Navigation />
      </section>
    )
  }

}
