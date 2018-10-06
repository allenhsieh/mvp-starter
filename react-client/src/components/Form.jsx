import React from 'react';
import ActiveTags from './ActiveTags.jsx';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: inline-block;
  margin-left: 30%;
  vertical-align: top;
`;

const Form = ({handleSubmit, handleChange, handleRemoveTag, activeTags}) => (
  <FormWrapper>
  <form onSubmit={handleSubmit}>
    <ActiveTags
      handleChange={handleChange}
      handleRemoveTag={handleRemoveTag}
      activeTags={activeTags}
    />
    <input type="submit" value="Submit" />
  </form>
  </FormWrapper>
)

export default Form;