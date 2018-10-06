import React from 'react';

const SearchResultItem = ({item}) => (
  <div>
    <label>
      <input
        name={item.identifier}
        type="checkbox"
        checked={item.checked}
        />
      <b>Identifier: </b> {item.identifier}<br/>
      <b>Title: </b> {item.title}
    </label>
  </div>
)

export default SearchResultItem;