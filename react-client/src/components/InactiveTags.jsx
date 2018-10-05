import React from 'react';
import InactiveTagItem from './InactiveTagItem.jsx'

const InactiveTags = ({addTag, inactiveTags}) => (
  <div>
    {inactiveTags.map((tag, index) => {
      return (
        <InactiveTagItem
          tag={tag}
          key={index}
          index={index}
          addTag={addTag}
        />
      );
    })}
  </div>
)


export default InactiveTags;