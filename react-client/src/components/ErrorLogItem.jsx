import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  margin: 5px;
  padding: 2px;
  border: 1px solid red;
`;

const ErrorLogItem = ({item: {identifier, error}}) => (
  <ItemWrapper>
    <div>
      <b style={{color: 'red'}}>Error: </b> {error}<br />
      <b>Identifier: </b> <a href={'https://archive.org/details/' + identifier}>{identifier}</a> <br />
    </div>
  </ItemWrapper>
)

export default ErrorLogItem;