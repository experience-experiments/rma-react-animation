import React from 'react'

const STYLE_ORIENT_R = { 'dominant-baseline': 'ideographic', 'text-anchor': 'start' }
const STYLE_ORIENT_L = { 'dominant-baseline': 'ideographic', 'text-anchor': 'end' }

/*
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#innerTickSize
 *  https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#outerTickSize
 */

const SIZE = 6 // D3 default 6 (we don't programmatically expose)
const PADDING = 16 // D3 default 3 (ditto)
const FORMAT = (v) => v
const TICKS = 10

export default class xAxis extends React.Component {
  createTransform () {
    const {
      h
    } = this.props

    return `translate(0, ${h})`
  }

  createTick (x, y, textContent) {
    const {
      vGrid: grid,
      h
    } = this.props

    const line = {
      x2: 0,
      y2: (grid)
        ? -h
        : 0
    }

    const text = {
      x: 0,
      y: PADDING,
      style: { 'text-anchor': 'middle' }
    }

    // console.log('x, y, line, text', x, y, line, text)

    const opacity = 1

    const transform = `translate(${x}, ${y})`
    const style = { 'opacity': opacity }

    return (
      <g className='tick' transform={transform} style={style}>
        <line {...line} />
        <text dy='.71em' {...text}>{textContent}</text>
        <circle className='tick-circle' />
      </g>
    )
  }

  createTicks () {
    console.log('createTicks()')

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
      scale
    } = this.props

    return scale
      .ticks(ticks)
      .map((i) => {
        const x = scale(i)
        const y = 0
        const textContent = format(i)
        return this.createTick(x, y, textContent)
      })
  }

  createLabel () {
    console.log('createLabel()')

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

      console.log('xAxis', '0em', '1em', (orient === 'right'), x, y)

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
  values: React.PropTypes.array
}

xAxis.defaultProps = {
  grid: false,
  type: 'text',
  size: SIZE,
  padding: PADDING,
  ticks: TICKS,
  format: FORMAT // ,
  // values: []
}
