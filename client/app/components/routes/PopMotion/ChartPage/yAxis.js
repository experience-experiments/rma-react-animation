import React from 'react'
import { tween, easing } from 'popmotion'

const STYLE = { 'dominant-baseline': 'ideographic', 'text-anchor': 'end' }

/*
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#innerTickSize
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#outerTickSize
 */

const SIZE = 6 // D3 default 6 (we don't programmatically expose)
const PADDING = 10 // D3 default 3 (ditto)
const TICKS = 10
const FORMAT = (v) => v

export default class yAxis extends React.Component {
  state = { axisData: [] }

  handleFrame = ({ i, t }) => {
    const {
      axisData
    } = this.state

    axisData.splice(i, 1, t)

    this.setState({ axisData: axisData })
  }

  animate = (axisData, ease = easing.easeIn, duration = 750) => {
    axisData.forEach((t, i) => {
      const onFrame = ({ y }) => {
        this.handleFrame({ i, t: { ...t, y } })
      }

      const onComplete = () => {
        this.handleFrame({ i, t: { ...t, y: t.y } })
      }

      tween({
        values: {
          y: {
            from: 0,
            to: t.y,
            ease: ease,
            duration: duration
          }
        },
        onFrame,
        onComplete
      }).start()
    })
  }

  createTransform () {
    const {
      orient,
      w
    } = this.props

    return (orient === 'right')
      ? `translate(${w}, 0)`
      : 'translate(0, 0)'
  }

  createTicks () {
    // console.log('createTicks()')

    const {
      axisData
    } = this.state

    return axisData.map(({ x, y, textContent, line, text }, key) => {
      const opacity = 1
      const transform = `translate(${x}, ${y})`
      const style = { 'opacity': opacity }
      return (
        <g className='tick' transform={transform} style={style} key={key}>
          <line {...line} />
          <text dy='.32em' {...text}>{textContent}</text>
          <circle className='tick-circle' />
        </g>
      )
    })
  }

  createLabel () {
    // console.log('createLabel()');

    const {
      label,
      m,
      orient
    } = this.props

    if (label) {
      const x = 0
      const y =
        (orient === 'right')
          ? 0 // m.right // - 20
          : -m.left
      const dx = '0em'
      const dy =
        (orient === 'right')
          ? '0em'
          : '1em'

      // console.log('yAxis', dx, dy, (orient === 'right'), x, y);

      return (
        <text
          className='label'
          transform='rotate(-90)'
          x={x} // no logic req (always zero)
          y={y} // reqs logic
          dx={dx}
          dy={dy}
          style={STYLE}>{label}</text>
      )
    }
  }

  componentDidMount () {
    // console.log('componentDidMount()');

    const {
      m,
      w,
      h,
      size,
      padding,
      type,
      values,
      ticks,
      format,
      scale,
      orient,
      hGrid: grid
    } = this.props

    let line
    let text

    if (orient === 'right') {

      line = {
        x2: (grid)
          ? -w
          : size, // 6
        y2: 0
      }

      text = {
        x: Math.max(size, 0) + padding, // 16
        y: 0,
        style: { 'text-anchor': 'start' }
      }

    } else {

      line = {
        x2: (grid)
          ? w
          : -size, // -6
        y2: 0
      }

      text = {
        x: -(Math.max(size, 0) + padding), // -16
        y: 0,
        style: { 'text-anchor': 'end' }
      }

    }

    this.setState({ axisData: [] })

    const axisData = scale
      .ticks(ticks)
      .map((i) => {
        const x = 0
        const y = scale(i)
        const textContent = format(i)
        return { x, y, textContent, line, text }
      })

    this.animate(axisData)
  }

  render () {
    const transform = this.createTransform()

    return (
      <g key='yAxis' className='y axis' transform={transform}>
        {this.createTicks()}
        {this.createLabel()}
      </g>
    )
  }
}

yAxis.propTypes = {
  grid: React.PropTypes.bool,
  type: React.PropTypes.string,
  size: React.PropTypes.number,
  padding: React.PropTypes.number,
  ticks: React.PropTypes.number,
  format: React.PropTypes.func
}

yAxis.defaultProps = {
  grid: false,
  type: 'text',
  size: SIZE,
  padding: PADDING,
  ticks: TICKS,
  format: FORMAT
}
