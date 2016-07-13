const data = [
  { x: 'A', y: 46 },
  { x: 'B', y: 49 },
  { x: 'C', y: 6 },
  { x: 'D', y: 6 },
  { x: 'E', y: 20 },
  { x: 'F', y: 51 },
  { x: 'G', y: 75 },
  { x: 'H', y: 35 },
  { x: 'I', y: 95 },
  { x: 'J', y: 61 },
  { x: 'K', y: 95 },
  { x: 'L', y: 60 },
  { x: 'M', y: 59 },
  { x: 'N', y: 24 },
  { x: 'O', y: 88 },
  { x: 'P', y: 45 },
  { x: 'Q', y: 30 },
  { x: 'R', y: 59 },
  { x: 'S', y: 34 },
  { x: 'T', y: 18 }
];

const lineData = [
  { x: 'A', y: 800 },
  { x: 'B', y: 1100 },
  { x: 'C', y: 1101 },
  { x: 'D', y: 2000 },
  { x: 'E', y: 900 },
  { x: 'F', y: 1000 },
  { x: 'G', y: 1500 },
  { x: 'H', y: 1580 },
  { x: 'I', y: 1900 },
  { x: 'J', y: 700 },
  { x: 'K', y: 1000 },
  { x: 'L', y: 1500 },
  { x: 'M', y: 1200 },
  { x: 'N', y: 1300 },
  { x: 'O', y: 1800 },
  { x: 'P', y: 1900 },
  { x: 'Q', y: 1200 },
  { x: 'R', y: 1500 },
  { x: 'S', y: 1900 },
  { x: 'T', y: 1400 }
];

export default [

// Data

  {
    data: [
      { x: 'A', y: 20 },
      { x: 'B', y: 30 },
      { x: 'C', y: 40 },
      { x: 'D', y: 20 },
      { x: 'E', y: 40 },
      { x: 'F', y: 25 },
      { x: 'G', y: 5 }
    ]
  },

// Height & Width

  {
    height: 150,
    width: 650,
    data: data
  },

// Color Bars

  {
    colorBars: true,
    height: 150,
    width: 650,
    data: data
  },

// Margin

  {
    colorBars: true,
    height: 150,
    width: 650,
    data: data,
    margin: { top: 0, right: 0, bottom: 30, left: 100 }
  },

// Overriding Color Bars

  {
    data: [
      { x: 'A', y: 20 },
      { x: 'B', y: 30, color: '#f00' },
      { x: 'C', y: 40 },
      { x: 'D', y: 20 },
      { x: 'E', y: 40 },
      { x: 'F', y: 25 },
      { x: 'G', y: 5, color: 'orange' }
    ]
  },

// Axes

  {
    height: 250,
    width: 650,
    axes: true,
    data: data
  },

// Axis Labels

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    axes: true,
    height: 250,
    width: 650,
    data: data
  },

// Y Axis orientation

  {
    height: 250,
    width: 650,
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    yAxisOrientRight: true,
    data: data
  },

// Axis Type, 1

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    axes: true,
    height: 250,
    width: 650,
    xType: 'linear',
    data: [
      { x: 10, y: 20 },
      { x: 12, y: 20 },
      { x: 30, y: 30, color: '#f00' },
      { x: 40, y: 40 }
    ]
  },

// Axis Type, 1

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    axes: true,
    height: 250,
    width: 650,
    colorBars: true,
    xType: 'time',
    data: [
      { x: '1-Jan-15', y: 20 },
      { x: '2-Jan-15', y: 10 },
      { x: '3-Jan-15', y: 33 }
    ]
  },

// Date Pattern

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    axes: true,
    height: 250,
    width: 650,
    datePattern: "%d-%b-%y %H:%M",
    colorBars: true,
    xType: 'time',
    data: [
      { x: '1-Jan-15 13:00', y: 20 },
      { x: '1-Jan-15 14:00', y: 10 },
      { x: '1-Jan-15 15:00', y: 33 }
    ]
  },

// Bar Width

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    axes: true,
    height: 250,
    width: 650,
    margin: { top: 50, right: 100, bottom: 50, left: 100 },
    colorBars: true,
    barWidth: 40,
    xType: 'time',
    data: [
      { x: '1-Jan-15', y: 20 },
      { x: '2-Jan-15', y: 10 },
      { x: '3-Jan-15', y: 33 }
    ]
  },

// Domain Range

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    axes: true,
    colorBars: true,
    height: 250,
    width: 650,
    barWidth: 20,
    xType: 'time',
    xDomainRange: ['5-Jan-15', '18-Jan-15'],
    yDomainRange: [5, 50],
    data: [
      { x: '10-Jan-15', y: 20 },
      { x: '12-Jan-15', y: 10 },
      { x: '15-Jan-15', y: 33 }
    ]
  },

// Tick Display Format

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    axes: true,
    colorBars: true,
    height: 250,
    width: 650,
    barWidth: 20,
    xType: 'time',
    tickTimeDisplayFormat: '%a',
    xDomainRange: ['1-Jan-15', '20-Jan-15'],
    data: [
      { x: '10-Jan-15', y: 20 },
      { x: '12-Jan-15', y: 10 },
      { x: '15-Jan-15', y: 33 }
    ]
  },

// Number of ticks

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    axes: true,
    colorBars: true,
    height: 250,
    width: 650,
    barWidth: 20,
    xTickNumber: 5,
    yTickNumber: 3,
    xType: 'time',
    xDomainRange: ['1-Jan-15', '20-Jan-15'],
    data: [
      { x: '10-Jan-15', y: 20 },
      { x: '12-Jan-15', y: 10 },
      { x: '15-Jan-15', y: 33 }
    ]
  },

// Grid

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    axes: true,
    grid: true,
    colorBars: true,
    height: 250,
    width: 650,
    data: data
  },

// Bar and Line

  {
    axisLabels: { x: 'My x Axis', y: 'My y Axis', y2: 'My second y Axis' },
    axes: true,
    grid: true,
    colorBars: true,
    interpolate: 'cardinal',
    height: 450,
    width: 650,
    lineData: lineData,
    data: data
  }

];

/*
export default [
  {
    data: data,
    lineData: lineData
  }, { // 2
    data: [
      { x: 'A', y: 20 },
      { x: 'B', y: 30 },
      { x: 'C', y: 40 },
      { x: 'D', y: 20 },
      { x: 'E', y: 40 },
      { x: 'F', y: 25 },
      { x: 'G', y: 5 }
    ]
  }, { // 3 + 4
    height: 150,
    width: 650,
    data: data
  }, { // 5
    height: 150,
    width: 650,
    margin: {
      top: 0,
      right: 0,
      bottom: 30,
      left: 100
    },
    data: data
  }, { // 6
    data: [
      { x: 'A', y: 20 },
      { x: 'B', y: 30, color: '#f00' },
      { x: 'C', y: 40 },
      { x: 'D', y: 20 },
      { x: 'E', y: 40 },
      { x: 'F', y: 25 },
      { x: 'G', y: 5, color: 'orange' }
    ]
  }, { // 7
    height: 250,
    width: 650,
    axes: true,
    data: data
  }, { // 8
    height: 250,
    width: 650,
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    data: data
  }, {
    height: 250,
    width: 650,
    barWidth: 20,
    xType: 'time',
    tickTimeDisplayFormat: '%a',
    xDomainRange: ['1-Jan-15', '20-Jan-15'],
    data: [
      { x: '10-Jan-15', y: 20 },
      { x: '12-Jan-15', y: 10 },
      { x: '15-Jan-15', y: 33 }
    ]
  }
]
*/