import React from 'react';

const InactiveTagItem = (props) => {
  return (
    <button type="button" onClick={props.addTag}>{props.tag[0]}</button>
  );
}

export default InactiveTagItem;