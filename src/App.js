import './App.css';
import Counter from './Counter';
import SearchForm from './SearchForm';
import GenreSelect from './GenreSelect';

function App() {
  const handleSearch = (query) => {
    const safeQuery = String(query == null ? '' : query).slice(0, 1000);
    if (process.env.NODE_ENV !== 'production') {
      console.log('Search performed with query:', safeQuery);
    }
  };

  const handleGenreSelect = (genre) => {
    console.log('Genre selected:', genre);
  };

  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  return (
    <div className="App" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <SearchForm initialQuery="" onSearch={handleSearch} />
        
        <GenreSelect genres={genres} selectedGenre="All" onSelect={handleGenreSelect} />
        
        <div style={{ padding: '30px', color: '#999', textAlign: 'center' }}>
          <p>39 movies found</p>
        </div>
        
        <div style={{ padding: '40px 30px', backgroundColor: '#2a2a2a', borderRadius: '8px', margin: '30px' }}>
          <Counter initialValue={0} />
        </div>
      </div>
    </div>
  );
}

export default App;
