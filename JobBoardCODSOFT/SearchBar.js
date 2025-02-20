cimport React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching jobs:', error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for jobs"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
