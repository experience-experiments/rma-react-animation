import React from 'react'
import Navigation from '../../../navigation'

import Tween from './tween'

export default class extends React.Component {
  state = {}

  handleMouseEnter = () => this.setState({ over: true })
  handleMouseLeave = () => this.setState({ over: null })

  render () {
    console.log('Tween')

    const { over } = this.state

    return (
      <section>
        <header>
          <h1>Tween</h1>
        </header>
        <div
          className='tween'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
            <Tween over={over}>
              {({ x }) => { // console.log('x', x);
                return (
                  <div className='animate' style={{ transform: `translate3d(${x}px, 0, 0)` }}>
                    <p>Nope</p>
                  </div>
                )
              }}
            </Tween>
            <div className='content'>
              <p>Yep</p>
            </div>
        </div>
      </section>
    )
  }
}
