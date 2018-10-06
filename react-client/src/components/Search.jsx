import React from 'react';
import SearchBar from './SearchBar.jsx';
// import SearchResults from './SearchResults.jsx';

const Search = ({query, handleSearchInput, handleSearchSubmit, searchResults}) => (
  <div>
    <SearchBar
      query={query}
      handleSearchInput={handleSearchInput}
      handleSearchSubmit={handleSearchSubmit}
    />
    {/* <SearchResults
      searchResults={searchResults}
    /> */}
  </div>
);

export default Search;