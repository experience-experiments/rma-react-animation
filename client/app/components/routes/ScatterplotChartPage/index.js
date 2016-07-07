import React from 'react'
import { ScatterplotChart } from 'react-easy-chart'
import Navigation from '../../navigation'

export default class extends React.Component {

  render () {
    return (
      <section>
        <header>
          <h1>Scatter Plot Chart</h1>
        </header>
        <ScatterplotChart
          data={[]}
        />
        <Navigation />
      </section>
    )
  }

}
