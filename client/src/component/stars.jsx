import React from 'react';
import styled from 'styled-components';
import GrayStar from '../style/graystar.svg';
import GoldenStar from '../style/goldenstar.svg';

const Stars = ({ stars }) => {
  const width = (stars / 5) * 100;
  const widthPercentage = Math.round(width / 10) * 10;

  // half star?
  return (
    <StarsContainer>
      {widthPercentage >= 10 ? <GoldenStar /> : <GrayStar /> }
      {widthPercentage >= 30 ? <GoldenStar /> : <GrayStar /> }
      {widthPercentage >= 50 ? <GoldenStar /> : <GrayStar /> }
      {widthPercentage >= 70 ? <GoldenStar /> : <GrayStar /> }
      {widthPercentage >= 90 ? <GoldenStar /> : <GrayStar /> }
    </StarsContainer>
  );
};

export default Stars;

const StarsContainer = styled.div`
  padding: 0px;
  display: inline-flex;
  width: 80px;
  height: 15px ;
`;
