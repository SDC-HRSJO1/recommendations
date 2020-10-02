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
      {widthPercentage >= 10 ? <GoldenStar style={{width: '15px', height: '15px' }} /> : <GrayStar style={{ width: '15px', height: '15px' }} /> }
      {widthPercentage >= 30 ? <GoldenStar style={{width: '15px', height: '15px' }} /> : <GrayStar style={{ width: '15px', height: '15px' }} /> }
      {widthPercentage >= 50 ? <GoldenStar style={{width: '15px', height: '15px' }} /> : <GrayStar style={{ width: '15px', height: '15px' }} /> }
      {widthPercentage >= 70 ? <GoldenStar style={{width: '15px', height: '15px' }} /> : <GrayStar style={{ width: '15px', height: '15px' }} /> }
      {widthPercentage >= 90 ? <GoldenStar style={{width: '15px', height: '15px' }} /> : <GrayStar style={{ width: '15px', height: '15px' }} /> }
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
