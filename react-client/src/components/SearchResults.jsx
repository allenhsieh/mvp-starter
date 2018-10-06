import React from 'react';
import SearchResultItem from './SearchResultItem.jsx';

const SearchResults = ({searchResults}) => (
  <form>
    {searchResults.map(item => {
      return (
        <SearchResultItem item={item} key={item.identifier}/>
      )
    })}
  </form>
)


export default SearchResults;