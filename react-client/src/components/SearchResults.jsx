import React from 'react';
import SearchResultItem from './SearchResultItem.jsx';
import SelectAll from './SelectAll.jsx';

const SearchResults = ({searchResults, handleCheck, handleSelectAll}) => {
  let selectAll;
  (searchResults.length > 0) && (selectAll = <SelectAll handleSelectAll={handleSelectAll}/>);
  return (<div>
    {selectAll}
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
  </div>
  )
}


export default SearchResults;