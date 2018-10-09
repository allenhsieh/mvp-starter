import React from 'react';
import styled from 'styled-components';

const SuccessWrapper = styled.div`
  margin: 5px;
  padding: 2px;
  border: 1px solid black;
`;

const SuccessLogItem = ({item: {identifier, log}}) => (
  <SuccessWrapper>
    <div>
      <b>Success!</b><br />
      <b>Identifier: </b> <a href={'https://archive.org/details/' + identifier}>{identifier}</a> <br />
      <b>Log: </b> <a href={log}>Click here for log</a>
    </div>
  </SuccessWrapper>
)

export default SuccessLogItem;