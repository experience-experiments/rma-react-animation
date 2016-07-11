const data = [
  { 'key': 'A', 'value': 956.022662328486, 'color': '#1e313c' },
  { 'key': 'B', 'value': 338.2905078779768, 'color': '#3f4c55' },
  { 'key': 'C', 'value': 524.7342393474503, 'color': '#667178' },
  { 'key': 'D', 'value': 926.3316183846974, 'color': '#f4e956' },
  { 'key': 'E', 'value': 174.61467962847055, 'color': '#e3a51a' },
  { 'key': 'F', 'value': 194.45016762175348, 'color': '#aaac84' },
  { 'key': 'G', 'value': 915.6017113048474, 'color': '#dce7c5' }
];

export default [
  { // 1
    data: [
      { key: 'A', value: 100 },
      { key: 'B', value: 200 },
      { key: 'C', value: 50 }
    ]
  }, { // 2
     size: 100,
     data: [
       { key: 'A', value: 100, color: '#aaac84' },
       { key: 'B', value: 200, color: '#dce7c5' },
       { key: 'C', value: 50, color: '#e3a51a' }
     ]
  }, { // 3
    size: 400,
    innerHoleSize: 200,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  }, { // 4
    padding: 50,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  }, { // 5
    labels: true,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ],
    styles: {
      '.chart_text': {
        fontSize: '1em',
        fill: '#fff'
      }
    }
  }, { // 6
    labels: true,
    styles: {
      '.chart_lines': {
        strokeWidth: 0
      },
      '.chart_text': {
        fontFamily: 'serif',
        fontSize: '1.25em',
        fill: '#333'
      }
    },
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  }, { // 7
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ],
    innerHoleSize: 200,
    mouseOverHandler: () => console.log('mouseover'),
    mouseOutHandler: () => console.log('mouseout'),
    mouseMoveHandler: () => console.log('mousemove'),
    padding: 10,
    styles: {
      '.pie-chart-lines': {
        stroke: 'rgba(0, 0, 0, 1)',
        strokeWidth: 1
      },
      '.pie-chart-text': {
        fontSize: '10px',
        fill: 'white'
      }
    }
  }, { // last
    labels: true,
    data: data
  }
]


