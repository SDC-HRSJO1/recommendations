import React from 'react';
import styled from 'styled-components';

const Label = ({ label }) => {
  const tags = ['null', 'Exclusive', 'Hard to Find', 'New'];

  if (label !== 0) {
    return (
      <TagLabel>
        {' '}
        {tags[label]}
        {' '}
      </TagLabel>
    );
  }
  return (
    <div> </div>
  );
};

export default Label;

const TagLabel = styled.label`
  position: absolute;
  top: 5px;
  right: 5px;
  color: rgb(0, 0, 0);
  padding: 0.19rem 0.625rem;
  font-family: 'Nunito Sans, sans-serif';
  font-size: 0.75rem;
  background: rgb(255, 207, 0);
  background-size: cover;


`;
