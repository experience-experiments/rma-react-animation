export default [

// Basic

  {
    data: [
      { key: 'Cats', value: 100 },
      { key: 'Dogs', value: 200 },
      { key: 'Other', value: 50 }
    ],
    dataId: 'key'
  },

// Horizontal

  {
    data: [
      { key: 'Cats', value: 100 },
      { key: 'Dogs', value: 200 },
      { key: 'Other', value: 50 }
    ],
    dataId: 'key',
    horizontal: true
  },

// Config

  {
    data: [
      { key: 'Cats', value: 100, color: '#aaac84' },
      { key: 'Dogs', value: 200, color: '#dce7c5' },
      { key: 'Other', value: 50, color: '#e3a51a' }
    ],
    dataId: 'key',
    config: [
      { color: '#aaac84' },
      { color: '#dce7c5' },
      { color: '#e3a51a' }
    ]
  },

// Styles

  {
    data: [
      { key: 'Cats', value: 100, color: '#aaac84' },
      { key: 'Dogs', value: 200, color: '#dce7c5' },
      { key: 'Other', value: 50, color: '#e3a51a' }
    ],
    dataId: 'key',
    config: [
      { color: '#aaac84' },
      { color: '#dce7c5' },
      { color: '#e3a51a' }
    ],
    styles: {
      '.legend': {
        backgroundColor: '#f9f9f9',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        fontSize: '0.8em',
        maxWidth: '300px',
        padding: '12px'
      }
    }
  },

// Scatterplot

  {
    data: [
      { type: 'One', x: 1, y: 5 },
      { type: 'One', x: 2, y: 6 },
      { type: 'One', x: 3, y: 7 },
      { type: 'Two', x: 3, y: 1 },
      { type: 'Two', x: 4, y: 2 },
      { type: 'Two', x: 5, y: 3 },
      { type: 'Three', x: 0, y: 6 },
      { type: 'Three', x: 1, y: 7 },
      { type: 'Three', x: 2, y: 8 },
      { type: 'Four', x: 5, y: 2 },
      { type: 'Four', x: 6, y: 3 },
      { type: 'Four', x: 7, y: 4 },
      { type: 'Five', x: 4, y: 4 },
      { type: 'Five', x: 5, y: 5 },
      { type: 'Five', x: 6, y: 6 }
    ],
    dataId: 'type',
    styles: {
      '.legend': {
        backgroundColor: '#f9f9f9',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        fontSize: '0.8em',
        maxWidth: '480px',
        padding: '12px'
      }
    },
    horizontal: true
  }
];