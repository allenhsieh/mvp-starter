import React from 'react';
import InactiveTagItem from './InactiveTagItem.jsx'
import styled from 'styled-components';

const InactiveWrapper = styled.div`
  display: inline-block;
  margin-left: 2.5%;
  vertical-align: top;
`;

const InactiveTags = ({handleAddTag, inactiveTags}) => (
  <InactiveWrapper>
    {inactiveTags.map((tag, index) => {
      return (
        <InactiveTagItem
          tag={tag}
          key={index}
          index={index}
          handleAddTag={handleAddTag}
        />
      );
    })}
  </InactiveWrapper>
)


export default InactiveTags;