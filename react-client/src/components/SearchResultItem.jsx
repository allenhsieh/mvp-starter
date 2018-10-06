import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  padding-top: 10px
`;

const SearchResultItem = ({item, index, handleCheck}) => (
  <LabelWrapper>
  <div>
    <label>
      <input
        name={item.identifier}
        type="checkbox"
        checked={item.checked}
        onChange={(event) => handleCheck(event, index)}
      />
      <b>Identifier: </b> {item.identifier}<br/>
      <b>Title: </b> {item.title}
    </label>
  </div>
  </LabelWrapper>
)

export default SearchResultItem;