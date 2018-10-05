import React from 'react';
import ActiveTags from './ActiveTags.jsx';

const Form = ({handleSubmit, handleChange, handleRemoveTag, activeTags}) => (
  <form onSubmit={handleSubmit}>
    <ActiveTags
      handleChange={handleChange}
      handleRemoveTag={handleRemoveTag}
      activeTags={activeTags}
    />
    <input type="submit" value="Submit" />
  </form>
)

export default Form;