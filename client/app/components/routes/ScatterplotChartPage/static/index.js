import React from 'react'
import { ScatterplotChartStatic as ScatterplotChart } from 'react-easy-chart'
import Navigation from '../../../navigation'

import scatterplotChart from './scatterplotChart'

const count = (scatterplotChart.length - 1)

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
    console.log('ScatterplotChart (Static)')

    const {
      index
    } = this.state

    return (
      <section>
        <header>
          <h1>Scatter Plot Chart ({index})</h1>
        </header>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <ScatterplotChart {...scatterplotChart[index]} />
        <Navigation />
      </section>
    )
  }

}
