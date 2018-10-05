import React from 'react';
import InactiveTagItem from './InactiveTagItem.jsx'

<div>
{this.state.inactiveTags.map((tag, index) => {
  return (
    <InactiveTagItem
      tag={tag}
      key={index}
      addTag={this.handleAddTag.bind(this, index)}
    />
  );
})}
</div>

export default inactiveTags;