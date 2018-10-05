import React from 'react';

const ActiveTagItem = (props) => (
  <div>
    <label>
      <button type="button" data-index={props.index} className="remove-tag" onClick={props.removeTag}>✖</button>  {props.tag[0]}:
      <input type="text"  data-index={props.index} name={props.tag[0]} value={props.tag[1]} onChange={props.change}/>
    </label>
  </div>
);

export default ActiveTagItem;