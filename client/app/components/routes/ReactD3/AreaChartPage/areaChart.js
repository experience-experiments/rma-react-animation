export default [

// Data, 1

  {
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ]
    ]
  },

// Data, 2

  {
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Height & Width

  {
    width: 50,
    height: 50,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Margin

  {
    margin: { top: 30, right: 30, bottom: 30, left: 30 },
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Axes

  {
    axes: true,
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Axis Labels

  {
    axes: true,
    margin: { top: 10, right: 10, bottom: 50, left: 50 },
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Y Axis Orientation

  {
    axes: true,
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    yAxisOrientRight: true,
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Interpolate

  {
    interpolate: 'cardinal',
    axes: true,
    margin: { top: 10, right: 10, bottom: 50, left: 50 },
    axisLabels: { x: 'My x Axis', y: 'My y Axis' },
    width: 350,
    height: 250,
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]
  },

// Axis Type, Text

  {
    xType: 'text',
    axes: true,
    interpolate: 'cardinal',
    width: 350,
    height: 250,
    data: [
      [
        { x: 'Mon', y: 20 },
        { x: 'Tue', y: 10 },
        { x: 'Wed', y: 33 },
        { x: 'Thu', y: 45 },
        { x: 'Fri', y: 15 }
      ], [
        { x: 'Mon', y: 10 },
        { x: 'Tue', y: 15 },
        { x: 'Wed', y: 13 },
        { x: 'Thu', y: 15 },
        { x: 'Fri', y: 10 }
      ]
    ]
  },

// Axis Type, Time

  {
    xType: 'time',
    axes: true,
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  },

// Axis Type, Text + Text

  {
    yType: 'text',
    xType: 'text',
    axisLabels: { x: 'Day', y: 'How much did I eat' },
    axes: true,
    interpolate: 'cardinal',
    margin: { top: 10, right: 30, bottom: 50, left: 70 },
    width: 350,
    height: 250,
    yDomainRange: ['Allot', 'Perfect', 'Little'],
    data: [
      [
        { x: 'Mon', y: 'Little' },
        { x: 'Tue', y: 'Perfect' },
        { x: 'Wed', y: 'Allot' },
        { x: 'Thu', y: 'Little' },
        { x: 'Fri', y: 'Perfect' }
      ]
    ]
  },

// Grid

  {
    xType: 'time',
    axes: true,
    grid: true,
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  },

// Vertical Grid

  {
    xType: 'time',
    axes: true,
    grid: true,
    verticalGrid: true,
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  },

// Domain Range

  {
    axes: true,
    xDomainRange: [0, 100],
    yDomainRange: [0, 100],
    width: 750,
    height: 250,
    interpolate: 'cardinal',
    data: [
      [
        { x: 10, y: 25 },
        { x: 20, y: 10 },
        { x: 30, y: 25 },
        { x: 40, y: 10 },
        { x: 50, y: 12 },
        { x: 60, y: 25 }
      ], [
        { x: 10, y: 40 },
        { x: 20, y: 30 },
        { x: 30, y: 25 },
        { x: 40, y: 60 },
        { x: 50, y: 22 },
        { x: 60, y: 9 }
      ]
    ]
  },

// Tick Display

  {
    xType: 'time',
    axes: true,
    grid: true,
    tickTimeDisplayFormat: '%d %m',
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  },

// Number of Ticks

  {
    xType: 'time',
    axes: true,
    xTicks: 5,
    yTicks: 3,
    grid: true,
    tickTimeDisplayFormat: '%d %m',
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  },

// Data Points

  {
    xType: 'time',
    axes: true,
    dataPoints: true,
    xTicks: 5,
    yTicks: 3,
    grid: true,
    tickTimeDisplayFormat: '%d %m',
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  },

// Area Colors

  {
    xType: 'time',
    axes: true,
    xTicks: 5,
    yTicks: 3,
    dataPoints: true,
    grid: true,
    areaColors: ['black', 'purple'],
    tickTimeDisplayFormat: '%d %M',
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  },

// Area Gradient

  {
    xType: 'time',
    axes: true,
    xTicks: 5,
    yTicks: 3,
    dataPoints: true,
    grid: true,
    noAreaGradient: true,
    tickTimeDisplayFormat: '%d %M',
    interpolate: 'cardinal',
    width: 750,
    height: 250,
    data: [
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]
  }

];
