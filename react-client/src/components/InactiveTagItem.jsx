import React from 'react';

const InactiveTagItem = ({tag, index, handleAddTag}) => {
  return (
    <div>
      <button type="button" onClick={() => handleAddTag(index)}>{tag[0]}</button>
    </div>
  );
}

export default InactiveTagItem;