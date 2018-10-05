import React from 'react';

const InactiveTagItem = ({tag, index, handleAddTag}) => {
  return (
    <button type="button" onClick={() => handleAddTag(index)}>{tag[0]}</button>
  );
}

export default InactiveTagItem;