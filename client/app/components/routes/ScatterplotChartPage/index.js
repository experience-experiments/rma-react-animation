import React from 'react'
import { ScatterplotChart } from 'react-easy-chart'
import Navigation from '../../navigation'

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
    // console.log('ScatterplotChart')

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

  /*
  next () {
    const {
      index
    } = this.state

    this.setState({ index: (index === count) ? 0 : index + 1 })
  }

  componentDidMount () { console.log('componentDidMount()')
    const interval = setInterval(() => this.next(), 1000);

    this.setState({ interval: interval })
  }

  componentWillUnmount () { console.log('componentWillUnmount()')
    const {
      interval
    } = this.state

    clearInterval(interval);
  }

  handleClick = () => {
    this.next()
  }
  */