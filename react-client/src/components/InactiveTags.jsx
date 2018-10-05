import React from 'react';
import InactiveTagItem from './InactiveTagItem.jsx'

const InactiveTags = ({handleAddTag, inactiveTags}) => (
  <div>
    {inactiveTags.map((tag, index) => {
      return (
        <InactiveTagItem
          tag={tag}
          key={index}
          index={index}
          handleAddTag={handleAddTag}
        />
      );
    })}
  </div>
)


export default InactiveTags;