import React from 'react';
import ActiveTagItem from './ActiveTagItem.jsx'

const ActiveTag = ({change, removeTag, activeTags}) => (
  <div>
      {activeTags.map((tag, index) => {
        return (
            <ActiveTagItem
              change={change}
              tag={tag}
              key={index}
              index={index}
              removeTag={removeTag}
            />
        );
      })}
  </div>
)

export default ActiveTag;