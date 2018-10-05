import React from 'react';
import ActiveTagItem from './ActiveTagItem.jsx'

const ActiveTag = ({handleChange, handleRemoveTag, activeTags}) => (
  <div>
      {activeTags.map((tag, index) => {
        return (
          <ActiveTagItem
            handleChange={handleChange}
            tag={tag}
            key={index}
            index={index}
            handleRemoveTag={handleRemoveTag}
          />
        );
      })}
  </div>
)

export default ActiveTag;