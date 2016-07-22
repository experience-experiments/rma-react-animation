const textData = [
  { type: 1, x: 'Tue', y: 10 },
  { type: 1, x: 'Wed', y: 20 },
  { type: 2, x: 'Thu', y: 30 },
  { type: 3, x: 'Wed', y: 40 }
];

const timeData = [
  { type: 1, x: '1-Jan-15', y: 10 },
  { type: 1, x: '2-Jan-15', y: 20 },
  { type: 2, x: '1-Jan-15', y: 30 },
  { type: 2, x: '2-Jan-15', y: 30 },
  { type: 3, x: '3-Jan-15', y: 40 }
];

const axisData = [
  { type: 'One', x: 1, y: 5, z: 500 },
  { type: 'One', x: 3, y: 1, z: 100 },
  { type: 'One', x: 0, y: 6, z: 600 },
  { type: 'One', x: 5, y: 2, z: 200 },
  { type: 'One', x: 4, y: 4, z: 400 },
  { type: 'One', x: 5, y: 9, z: 900 },
  { type: 'One', x: 9, y: 1, z: 100 },
  { type: 'One', x: 5, y: 6, z: 600 },
  { type: 'One', x: 3, y: 9, z: 900 },
  { type: 'One', x: 7, y: 9, z: 900 }
];

const data = [
  { type: 'One', x: 1, y: 5 },
  { type: 'Two', x: 3, y: 1 },
  { type: 'Three', x: 0, y: 6 },
  { type: 'Four', x: 5, y: 2 },
  { type: 'Five', x: 4, y: 4 },
  { type: 'Six', x: 5, y: 9 },
  { type: 'Seven', x: 9, y: 1 },
  { type: 'Eight', x: 5, y: 6 },
  { type: 'Nine', x: 3, y: 9 },
  { type: 'Ten', x: 7, y: 9 }
];

const config = [
  { type: 'One', color: '#1e313c', stroke: 'black' },
  { type: 'Two', color: '#3f4c55', stroke: 'black' },
  { type: 'Three', color: '#667178', stroke: 'black' },
  { type: 'Four', color: '#f4e956', stroke: 'black' },
  { type: 'Five', color: '#e3a51a', stroke: 'black' },
  { type: 'Six', color: '#aaac84', stroke: 'black' },
  { type: 'Seven', color: '#dce7c5', stroke: 'black' },
  { type: 'Eight', color: '#e4e8ec', stroke: 'black' }
];

export default [

// Data

/*
  {
    data: data,
  },

// Height & Width

  {
    data: data,
    width: 160,
    height: 90
  },

// Margin

  {
    data: data,
    margin: { top: 10, right: 10, bottom: 30, left: 100 },
  },

// Axes
*/

  {
    data: data,
    axes: true,
    width: 480,
    height: 270
  },

// Y Axis Orientation

  {
    data: data,
    axes: true,
    yAxisOrientRight: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    width: 480,
    height: 270
  },

// Axis Labels

  {
    data: data,
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    width: 480,
    height: 270
  },

// Dot Radius

  {
    data: data,
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    dotRadius: 10,
    width: 480,
    height: 270
  },

// Config

  {
    data: data,
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    dotRadius: 10,
    width: 480,
    height: 270,
    config: config
  },

// Grid

  {
    data: data,
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    dotRadius: 6,
    width: 480,
    height: 270,
    grid: true
  },

// Vertical Grid

  {
    data: data,
    axes: true,
    verticalGrid: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    dotRadius: 6,
    width: 480,
    height: 270,
    grid: true
  },

// Axis Type

  {
    data: textData,
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    dotRadius: 6,
    width: 480,
    height: 270,
    grid: true,
    xType: 'text'
  },

// Domain Range

  {
    data: timeData,
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    dotRadius: 6,
    width: 480,
    height: 270,
    grid: true,
    xType: 'time',
    xDomainRange: ['31-Dec-14', '4-Jan-15']
  },

// 3rd Data Type

  {
    data: axisData,
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    width: 480,
    height: 270,
    grid: true
  }

];
