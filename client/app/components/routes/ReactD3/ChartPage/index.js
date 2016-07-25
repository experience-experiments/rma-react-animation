import React from 'react'
import AnimationFrame from 'animation-frame'

const animationFrame = new AnimationFrame;

export default class extends React.Component {
  state = {
    index: 0,
    count: 0
  }

  next () {
    const {
      index,
      count
    } = this.state

    this.setState({ index: (index === count) ? 0 : index + 1 })
  }

  componentDidMount () {
    const interval = setInterval(() => {
      animationFrame.request(() => this.next());
    }, 1000);

    this.setState({ interval: interval })
  }

  componentWillUnmount () {
    const {
      interval
    } = this.state

    clearInterval(interval);
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
          <h1>Chart Page</h1>
        </header>
      </section>
    )
  }

}
