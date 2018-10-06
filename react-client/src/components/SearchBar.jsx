import React from 'react';

const SearchBar = ({handleSearchSubmit, handleSearchInput, query}) => (
  <form onSubmit={handleSearchSubmit}>
    <label>
      Search:
      <input type="text" value={query} onChange={handleSearchInput} />
    </label>
  </form>
)

export default SearchBar;