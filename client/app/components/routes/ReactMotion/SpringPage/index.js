import React from 'react'
import { Motion, spring } from 'react-motion';

export default class extends React.Component {
  state = {}

  handleMouseEnter = () => this.setState({ over: true })
  handleMouseLeave = () => this.setState({ over: null })

  render () {
    console.log('Spring')

    const {
      over
    } = this.state

    const x =
      (over)
        ? spring(400)
        : spring(0)

    return (
      <section>
        <header>
          <h1>Spring</h1>
        </header>
        <div
          className='spring'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <Motion style={{ x }}>
            {({ x }) => (
              <div className='animate' style={{ transform: `translate3d(${x}px, 0, 0)` }}>
                <p>{
                  (x > 200) // Math.round(x) > 200
                    ? 'Yep'
                    : 'Nope'
                }</p>
              </div>
            )}
          </Motion>
          <div className='content'>
            <p>Yep</p>
          </div>
        </div>
      </section>
    )
  }
}
