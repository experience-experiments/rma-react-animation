export default [

// Data, 1

  {
    data: [
      { key: 'A', value: 100 },
      { key: 'B', value: 200 },
      { key: 'C', value: 50 }
    ]
  },

// Data, 2

  {
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

// Size

  {
    size: 100,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

// Donut

  {
    size: 400,
    innerHoleSize: 200,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

// Padding

  {
    padding: 50,
    data: [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]
  },

// Labels

  {
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
  },

// Style

  {
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
  }

];
