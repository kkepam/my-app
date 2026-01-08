import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Number(this.props.initialValue) || 0
    };
  }

  decrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  }

  increment = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  }

  render() {
    return React.createElement(
      'div',
      { style: { padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' } },
      React.createElement('h2', null, 'Counter'),
      React.createElement('div', { style: { fontSize: '32px', marginBottom: '10px' } }, this.state.value),
      React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { 
            onClick: this.decrement,
            style: { padding: '8px 16px', marginRight: '10px', cursor: 'pointer' }
          },
          'Decrement'
        ),
        React.createElement(
          'button',
          { 
            onClick: this.increment,
            style: { padding: '8px 16px', cursor: 'pointer' }
          },
          'Increment'
        )
      )
    );
  }
}

export default Counter;
