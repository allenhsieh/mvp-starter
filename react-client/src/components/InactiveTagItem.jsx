import React from 'react';

const InactiveTagItem = ({tag, index, addTag}) => {
  return (
    <button type="button" data-index={index} onClick={addTag}>{tag[0]}</button>
  );
}

export default InactiveTagItem;