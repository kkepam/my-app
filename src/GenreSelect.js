import React from 'react';

class GenreSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: this.props.selectedGenre || null
    };
  }

  handleGenreClick = (genre) => {
    this.setState({ selectedGenre: genre });
    if (this.props.onSelect) {
      this.props.onSelect(genre);
    }
  }

  render() {
    const genres = this.props.genres || [];
    
    const genreButtons = genres.map((genre) => 
      React.createElement(
        'button',
        {
          key: genre,
          onClick: () => this.handleGenreClick(genre),
          style: {
            padding: '8px 0',
            marginRight: '24px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: 'transparent',
            color: this.state.selectedGenre === genre ? '#fff' : '#999',
            fontWeight: this.state.selectedGenre === genre ? '600' : '400',
            fontSize: '13px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            borderBottom: this.state.selectedGenre === genre ? '3px solid #00A8E8' : 'none',
            transition: 'all 0.2s ease'
          }
        },
        genre
      )
    );

    return React.createElement(
      'div',
      { style: { backgroundColor: '#2a2a2a', paddingTop: '20px', paddingBottom: '20px', borderBottom: '1px solid #444' } },
      React.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%', paddingLeft: '30px', paddingRight: '30px' } },
        React.createElement(
          'div',
          { style: { display: 'flex', alignItems: 'center', flex: 1 } },
          genreButtons
        ),
        React.createElement(
          'div',
          { style: { display: 'flex', alignItems: 'center', gap: '8px', color: '#999', fontSize: '13px' } },
          React.createElement('span', null, 'SORT BY:'),
          React.createElement('select', {
            style: {
              padding: '6px 12px',
              backgroundColor: '#3a3a3a',
              color: '#fff',
              border: '1px solid #555',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px'
            }
          },
            React.createElement('option', null, 'Release Date'),
            React.createElement('option', null, 'Trending'),
            React.createElement('option', null, 'Top Rated')
          )
        )
      )
    );
  }
}

export default GenreSelect;
