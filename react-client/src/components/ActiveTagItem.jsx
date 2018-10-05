import React from 'react';

const ActiveTagItem = ({index, change, tag, removeTag}) => (
  <div>
    <label>
      <button type="button" data-index={index} className="remove-tag" onClick={removeTag}>✖</button>  {tag[0]}:
      <input type="text"  data-index={index} name={tag[0]} value={tag[1]} onChange={change}/>
    </label>
  </div>
);

export default ActiveTagItem;