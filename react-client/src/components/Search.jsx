import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: inline-block;
  margin-left: 2.5%;
  vertical-align: top;
`;

const Search = ({query, handleSearchInput, handleSearchSubmit, searchResults, handleCheck}) => (
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
    />
  </div>
  </SearchWrapper>
);

export default Search;