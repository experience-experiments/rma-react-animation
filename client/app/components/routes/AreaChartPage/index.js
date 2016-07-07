import React from 'react'
import { AreaChart } from 'react-easy-chart'
import Navigation from '../../navigation'

export default class extends React.Component {

  render () {
    return (
      <section>
        <header>
          <h1>Area Chart</h1>
        </header>
        <AreaChart
          data={[]}
        />
        <Navigation />
      </section>
    )
  }

}
