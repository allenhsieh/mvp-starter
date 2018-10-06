import React from 'react';
import SearchResultItem from './SearchResultItem.jsx';

const SearchResults = ({searchResults, handleCheck}) => (
  <form>
    {searchResults.map((item, index) => {
      return (
        <SearchResultItem
          item={item}
          key={item.identifier}
          index={index}
          handleCheck={handleCheck}
        />
      )
    })}
  </form>
)

export default SearchResults;