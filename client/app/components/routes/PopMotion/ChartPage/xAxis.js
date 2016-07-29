import React from 'react'
import { tween, easing } from 'popmotion'

const STYLE_ORIENT_R = { 'dominant-baseline': 'ideographic', 'text-anchor': 'start' }
const STYLE_ORIENT_L = { 'dominant-baseline': 'ideographic', 'text-anchor': 'end' }

/*
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#innerTickSize
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#outerTickSize
 */

const SIZE = 6 // D3 default 6 (we don't programmatically expose)
const PADDING = 10 // D3 default 3 (ditto)
const TICKS = 10
const FORMAT = (v) => v

export default class xAxis extends React.Component {
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
      const onFrame = ({ x }) => {
        this.handleFrame({ i, t: { ...t, x } })
      }

      const onComplete = () => {
        this.handleFrame({ i, t: { ...t, x: t.x } })
      }

      tween({
        values: {
          x: {
            from: 0,
            to: t.x,
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
      h
    } = this.props

    return `translate(0, ${h})`
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
          <text dy='.71em' {...text}>{textContent}</text>
          <circle className='tick-circle' />
        </g>
      )
    })
  }

  createLabel () {
    // console.log('createLabel()')

    const {
      label,
      m,
      w,
      h,
      orient
    } = this.props

    if (label) {
      const x =
        (orient === 'right')
          ? 0
          : w
      const y = (m.bottom - m.top)
      const dx = '0em'
      const dy = '1em'
      const style =
        (orient === 'right')
          ? STYLE_ORIENT_R
          : STYLE_ORIENT_L

      // console.log('xAxis', '0em', '1em', (orient === 'right'), x, y)

      return (
        <text
          className='label'
          x={x} // reqs logic
          y={y} // reqs logic
          dx={dx}
          dy={dy}
          style={style}>{label}</text>
      )
    }
  }

  componentDidMount () {
    // console.log('componentDidMount()')

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
      vGrid: grid
    } = this.props

    const line = {
      x2: 0,
      y2: (grid)
        ? -h
        : 0
    }

    const text = {
      x: 0,
      y: Math.max(size, 0) + padding,
      style: { 'text-anchor': 'middle' }
    }

    this.setState({ axisData: [] })

    const axisData = scale
      .ticks(ticks)
      .map((i) => {
        const x = scale(i)
        const y = 0
        const textContent = format(i)
        return { x, y, textContent, line, text }
      });

    this.animate(axisData)
  }

  render () {
    const transform = this.createTransform()

    return (
      <g key='xAxis' className='x axis' transform={transform}>
        {this.createTicks()}
        {this.createLabel()}
      </g>
    )
  }
}

xAxis.propTypes = {
  grid: React.PropTypes.bool,
  type: React.PropTypes.string,
  size: React.PropTypes.number,
  padding: React.PropTypes.number,
  ticks: React.PropTypes.number,
  format: React.PropTypes.func
}

xAxis.defaultProps = {
  grid: false,
  type: 'text',
  size: SIZE,
  padding: PADDING,
  ticks: TICKS,
  format: FORMAT
}
