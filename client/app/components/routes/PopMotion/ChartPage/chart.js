import React from 'react'
import Navigation from '../../../navigation'

import { svg, time } from 'd3'
import { Style } from 'radium'
import merge from 'lodash.merge'

import Path from './path'
import XAxis from './xAxis'
import YAxis from './yAxis'

import {
  createUniqueID,
  reduce,
  defaultStyles,
  getDefaultAxisStyles,
  defaultColors,
  createDomainX,
  createDomainY,
  createScaleX,
  createScaleY,
  createParserX,
  createParserY,
  createFormatX,
  createFormatY
} from './common'

export default class Chart extends React.Component {
  constructor (props) {
    super(props).uid = createUniqueID()
  }

  createStyle() {
    const {
      style,
      grid,
      hGrid,
      vGrid,
      orient
    } = this.props;

    const uid = this.uid;
    const scope = `.chart-${uid}`;
    const defaultAxisStyles = getDefaultAxisStyles(vGrid || grid, hGrid || grid, orient);
    const rules = merge({}, defaultStyles, style, defaultAxisStyles);

    return (
      <Style
        scopeSelector={scope}
        rules={rules}
      />
    );
  }

  render () {
    console.log('Chart')

    const {
      data,
      axes,
      type,
      xType,
      yType,
      grid,
      hGrid,
      vGrid,
      margin,
      width,
      height,
      orient,
      labels,
      colors,
      strokeWidth,
      interpolate,
      domains,
      pattern,
      patterns
    } = this.props

    const {
      top: t,
      right: r,
      bottom: b,
      left: l
    } = margin

    const w = [
      width,
      l,  // margin.left
      r   // margin.right
    ].reduce(reduce)

    const h = [
      height,
      t,  // margin.top
      b   // margin.bottom
    ].reduce(reduce)

    const axis = {
      data,
      grid,
      hGrid: hGrid || grid,
      vGrid: vGrid || grid,
      m: margin,
      w,
      h,
      orient
    }

    const strokes = colors.concat(defaultColors)

    const types = {
      x: xType || type,
      y: yType || type
    }

    domains.x = domains.x || createDomainX(types.x, data, pattern)
    domains.y = domains.y || createDomainY(types.y, data, pattern)

    const scales = {
      x: createScaleX(types.x, domains.x, w),
      y: createScaleY(types.y, domains.y, h)
    }

    const parsers = {
      x: createParserX(types.x, pattern),
      y: createParserY(types.y, pattern)
    }

    const formats = {
      x: createFormatX(types.x, patterns.x),
      y: createFormatY(types.y, patterns.y)
    }

    const linePath = svg.line()
      .interpolate(interpolate)
      .x((d) => scales.x(parsers.x(d)))
      .y((d) => scales.y(parsers.y(d)))

    const uid = this.uid
    const className = `chart-${uid}`
    const transform = `translate(${l}, ${t})`

    return (
      <div className={className}>
        {this.createStyle()}
        <svg
          className='chart'
          width={width}
          height={height}>
            <g key='chartGroup' transform={transform}>
              { axes ? <XAxis {...axis} domain={domains.x} scale={scales.x} format={formats.x} label={labels.x} /> : null }
              { axes ? <YAxis {...axis} domain={domains.y} scale={scales.y} format={formats.y} label={labels.y} /> : null }
              <g key='chartPathsGroup' className='chartPathsGroup'>{ /* transform='translate(0, 0)' */ }
                {data.map((lineData, i) => (
                  <Path key={i} stroke={strokes[i]} strokeWidth={strokeWidth} linePath={linePath} lineData={lineData} /* x={(d) => scales.x(parsers.x(d))} y={(d) => scales.y(parsers.y(d))} */ fill='none' />
                ))}
              </g>
            </g>
        </svg>
      </div>
    )
  }
}

Chart.propTypes = {
  data: React.PropTypes.array.isRequired,
  axes: React.PropTypes.bool,
  grid: React.PropTypes.bool,
  hGrid: React.PropTypes.bool,
  vGrid: React.PropTypes.bool,
  interpolate: React.PropTypes.string,
  margin: React.PropTypes.shape({
    top: React.PropTypes.number,
    right: React.PropTypes.number,
    bottom: React.PropTypes.number,
    left: React.PropTypes.number
  }),
  orient: React.PropTypes.string,
  labels: React.PropTypes.object,
  colors: React.PropTypes.array,
  strokeWidth: React.PropTypes.number,
  stroke: React.PropTypes.object,
  domains: React.PropTypes.object,
  pattern: React.PropTypes.string,
  patterns: React.PropTypes.object
}

Chart.defaultProps = {
  axes: false,
  grid: false,
  hGrid: false,
  vGrid: false,
  type: 'linear',
  xType: 'linear',
  yType: 'linear',
  interpolate: 'linear',
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  orient: 'left',
  labels: {},
  colors: [],
  strokeWidth: 2,
  style: {},
  domains: {},
  patterns: {}
}
