import React from 'react'
import { tween, easing } from 'popmotion'

export default class extends React.Component {
  state = { lineData: [] }

  handleFrame = ({ i, x, y }) => {
    const {
      lineData
    } = this.state

    lineData.splice(i, 1, { x, y })

    this.setState({ lineData: lineData })
  }

  animate = (lineData, ease = easing.easeIn, duration = 750, i = 0) => {
    const l = lineData.length;
    const d = (duration / l);
    const n = (i + 1)
    const f = lineData[i];
    const t = lineData[n];

    const onFrame = ({ x, y }) => {
      this.handleFrame({ i: n, x, y })
    }

    const onComplete = () => {
      this.handleFrame({ i: n, x: t.x, y: t.y })
      delete this.tween
      if (l > (n + 1)) {
        return (
          this.tween = (
            this.animate(lineData, ease, duration, n)
          )
        ).start()
      }
    }

    if (this.tween) this.tween.stop()

    return (
      this.tween = tween({
        values: {
          x: {
            from: f.x,
            to: t.x,
            ease: ease,
            duration: d
          },
          y: {
            from: f.y,
            to: t.y,
            ease: ease,
            duration: d
          }
        },
        onFrame,
        onComplete
      })
    ).start()
  }

  componentDidMount () {
    console.log('componentDidMount()');

    const {
      lineData
    } = this.props

    this.animate(lineData);
  }

  componentWillReceiveProps = (props) => {
    console.log('componentWillReceiveProps()', props)

    const {
      lineData
    } = props

    this.setState({ lineData: [] });

    this.animate(lineData);
  }

  render () {
    const {
      linePath,
      stroke,
      strokeWidth,
      fill
    } = this.props

    const {
      lineData
    } = this.state

    const d = linePath(lineData)

    return (
      <path d={d} stroke={stroke} strokeWidth={strokeWidth} fill={fill} className='line' />
    )
  }
}
