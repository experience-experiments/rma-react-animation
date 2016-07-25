import React from 'react'
import Navigation from '../../../navigation'
import { tween } from 'popmotion';

export default class extends React.Component {
  state = {}

  handleMouseEnter = () => {
    const t = tween({ values: { x: 200 }, onFrame: ({ x }) => console.log(x) })
    t.start()
    this.setState({ t: t })
  }
  handleMouseLeave = () => {
    const { t } = this.state
    t.stop()
    this.setState({ t: null })
  }

  render () {
    console.log('Tween')

    return (
      <section>
        <header>
          <h1>Tween</h1>
        </header>
        <div
          className='tween'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
            <p>Tween</p>
        </div>
      </section>
    )
  }
}
