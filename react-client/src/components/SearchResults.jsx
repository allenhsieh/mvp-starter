import React from 'react';
import SearchResultItem from './SearchResultItem.jsx';

const SearchResults = ({searchResults}) => (
  <form>
    {searchResults.map(item => {
      return (
        <SearchResultItem item={item} />
      )
    })}
  </form>
)


export default SearchResults;