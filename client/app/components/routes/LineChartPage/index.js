import React from 'react'
import { LineChart } from 'react-easy-chart'
import Navigation from '../../navigation'

import lineChart from './lineChart'

const count = (lineChart.length - 1)

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
    // console.log('LineChart')

    const {
      index
    } = this.state

    return (
      <section>
        <header>
          <h1>Line Chart ({index})</h1>
        </header>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <LineChart {...lineChart[index]} />
        <Navigation />
      </section>
    )
  }

}
