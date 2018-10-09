import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  margin: 5px;
  padding: 2px;
  border: 1px solid red;
`;

const ErrorLogItem = ({item}) => (
  <ItemWrapper>
    <div>
      <b style={{color: 'red'}}>Error: </b> {item.error}<br />
      <b>Identifier: </b> {item.identifier}
    </div>
  </ItemWrapper>
)

export default ErrorLogItem;