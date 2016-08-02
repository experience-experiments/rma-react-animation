import React from 'react'
import { Link } from 'react-router'
import Navigation from '../../../navigation'

import Chart from './Chart/index' // sodding os
import chart from './chart'

const count = (chart.length - 1)

export default class ChartPage extends React.Component {
  constructor (props) {
    super(props)

    const {
      routeParams
    } = props

    const index = (routeParams.index)
      ? parseInt(routeParams.index, 10) - 1
      : props.index

    if (isNaN(index) || index > count) {
      const {
        history
      } = props

      history.push('/pop-motion/chart')

      this.state = {
        index: props.index,
        count
      }
    } else {
      this.state = {
        index,
        count
      }
    }

  }

  render () {
    console.log('Chart')

    const {
      index,
      count
    } = this.state

    return (
      <section>
        <header>
          <h1>Chart</h1>
        </header>
        <Chart
          {...chart[index]}
        />
        <Navigation />
      </section>
    )
  }
}

ChartPage.propTypes = {
  index: React.PropTypes.number.isRequired
}

ChartPage.defaultProps = {
  index: 0
}
