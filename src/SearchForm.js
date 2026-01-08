import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: this.props.initialQuery || ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.triggerSearch();
    }
  }

  handleButtonClick = () => {
    this.triggerSearch();
  }

  triggerSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.searchQuery);
    }
  }

  render() {
    return React.createElement(
      'div',
      { style: { padding: '30px', backgroundColor: '#3a3a3a', borderRadius: '8px', marginBottom: '30px' } },
      React.createElement('h2', { style: { color: '#fff', marginBottom: '20px', textTransform: 'uppercase', fontSize: '18px', letterSpacing: '1px' } }, 'Find Your Movie'),
      React.createElement(
        'div',
        { style: { display: 'flex', gap: '10px', alignItems: 'center' } },
        React.createElement('input', {
          type: 'text',
          value: this.state.searchQuery,
          onChange: this.handleInputChange,
          onKeyPress: this.handleKeyPress,
          placeholder: 'What do you want to watch?',
          style: {
            padding: '12px 16px',
            width: '400px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#2a2a2a',
            color: '#fff',
            fontSize: '14px',
            outline: 'none'
          }
        }),
        React.createElement(
          'button',
          {
            onClick: this.handleButtonClick,
            style: {
              padding: '12px 24px',
              cursor: 'pointer',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#EE5A52',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '14px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }
          },
          'Search'
        )
      )
    );
  }
}

export default SearchForm;
