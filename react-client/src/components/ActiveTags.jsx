import React from 'react';
import ActiveTagItem from './ActiveTagItem.jsx'

const ActiveTag = (props) => (
  <div>
      {props.activeTags.map((tag, index) => {
        return (
            <ActiveTagItem
              change={props.change}
              tag={tag}
              key={index}
              removeTag={props.removeTag}
            />
        );
      })}
  </div>
)

export default ActiveTag;