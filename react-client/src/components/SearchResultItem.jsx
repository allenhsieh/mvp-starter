import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  padding-top: 10px
`;

const SearchResultItem = ({item: {identifier, checked, title}, index, handleCheck}) => (
  <LabelWrapper>
  <div>
    <label>
      <input
        name={identifier}
        type="checkbox"
        checked={checked}
        onChange={(event) => handleCheck(event, index)}
      />
      <b>Identifier: </b> {identifier}<br/>
      <b>Title: </b> {title}
    </label>
  </div>
  </LabelWrapper>
)

export default SearchResultItem;