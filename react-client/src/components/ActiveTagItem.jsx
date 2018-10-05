import React from 'react';

const ActiveTagItem = ({index, handleChange, tag, handleRemoveTag}) => (
  <div>
    <label>
      <button type="button" className="remove-tag" onClick={() => handleRemoveTag(index)}>✖</button>  {tag[0]}:
      <input type="text" name={tag[0]} value={tag[1]} onChange={(event) => handleChange(event, index)}/>
    </label>
  </div>
);

export default ActiveTagItem;