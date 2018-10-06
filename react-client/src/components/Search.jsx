import React from 'react';
import SearchBar from './SearchBar.jsx';
// import SearchResults from './SearchResults.jsx';

const Search = ({query, handleSearchInput, searchResults}) => (
  <div>
    <SearchBar
      query={query}
      handleSearchInput={handleSearchInput}
    />
    {/* <SearchResults
      searchResults={searchResults}
    /> */}
  </div>
);

export default Search;