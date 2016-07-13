import React from 'react'
import { Legend } from 'react-easy-chart'
import Navigation from '../../navigation'

import legend from './legend'

const count = (legend.length - 1)

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
    // console.log('Legend')

    const {
      index
    } = this.state

    return (
      <section>
        <header>
          <h1>Legend ({index})</h1>
        </header>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <Legend {...legend[index]} />
        <Navigation />
      </section>
    )
  }
}
