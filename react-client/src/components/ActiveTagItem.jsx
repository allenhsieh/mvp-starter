import React from 'react';

const ActiveTagItem = (props) => (
  <div>
    <label>
      <button type="button" className="remove-tag" onClick={props.removeTag}>✖</button>  {props.tag[0]}:
      <input type="text" name={props.tag[0]} value={props.tag[1]} onChange={props.change}/>
    </label>
  </div>
);

export default ActiveTagItem;