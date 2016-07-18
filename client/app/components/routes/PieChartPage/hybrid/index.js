import React from 'react'
import { PieChartHybrid as PieChart } from 'react-easy-chart'
import Navigation from '../../../navigation'

import pieChart from './pieChart'

const count = (pieChart.length - 1)

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
    console.log('PieChart (Hybrid)')

    const {
      index
    } = this.state

    return (
      <section>
        <header>
          <h1>Pie Chart ({index})</h1>
        </header>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <PieChart {...pieChart[index]} />
        <Navigation />
      </section>
    )
  }

}
