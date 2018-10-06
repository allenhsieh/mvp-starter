import React from 'react';

const SearchBar = ({handleSearchInput, query}) => (
  <form>
    <label>
      Search:
      <input type="text" value={query} onChange={handleSearchInput} />
    </label>
  </form>
)

export default SearchBar;