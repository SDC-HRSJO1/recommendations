import React from 'react';
import GrayStar from '../style/graystar.svg';

const Stars = ({ stars }) => {
  const width = (stars / 5) * 100;
  const widthPercentage = Math.round(width / 10) * 10;

  return (
    <div>
      <GrayStar />
    </div>

  );
};

export default Stars;
