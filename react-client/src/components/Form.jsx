import React from 'react';
import ActiveTags from './ActiveTags.jsx';

const Form = ({submit, change, removeTag, activeTags}) => (
  <form onSubmit={submit}>
    <ActiveTags
      change={change}
      removeTag={removeTag}
      activeTags={activeTags}
    />
    <input type="submit" value="Submit" />
  </form>
)

export default Form;