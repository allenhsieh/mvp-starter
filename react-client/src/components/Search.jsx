import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: inline-block;
  margin-left: 25px;
  vertical-align: top;
`;

const Search = ({query, handleSearchInput, handleSearchSubmit, searchResults, handleCheck, handleSelectAll}) => (
  <SearchWrapper>
  <div>
    <SearchBar
      query={query}
      handleSearchInput={handleSearchInput}
      handleSearchSubmit={handleSearchSubmit}
    />
    <SearchResults
      searchResults={searchResults}
      handleCheck={handleCheck}
      handleSelectAll={handleSelectAll}
    />
  </div>
  </SearchWrapper>
);

export default Search;