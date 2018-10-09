import React from 'react';
import styled from 'styled-components';

const SuccessWrapper = styled.div`
  margin: 5px;
  padding: 2px;
  border: 1px solid black;
`;

const SuccessLogItem = ({item}) => (
  <SuccessWrapper>
    <div>
      <b>Success!</b><br />
      <b>Identifier: </b> {item.identifier} <br />
      <b>Log: </b> <a href={item.log}>Click here for log</a>
    </div>
  </SuccessWrapper>
)

export default SuccessLogItem;