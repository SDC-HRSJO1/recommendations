import React from 'react';
import GrayStar from '../style/graystar.svg';
import GoldenStar from '../style/goldenstar.svg';
import style from '../style/style.css.jsx';

const Stars = ({ stars }) => {
  const width = (stars / 5) * 100;
  const widthPercentage = Math.round(width / 10) * 10;

  // half star?
  return (
    <div style={style.stars}>
      {widthPercentage >= 10 ? <GoldenStar style={style.star} /> : <GrayStar style={style.star} /> }
      {widthPercentage >= 30 ? <GoldenStar style={style.star} /> : <GrayStar style={style.star} /> }
      {widthPercentage >= 50 ? <GoldenStar style={style.star} /> : <GrayStar style={style.star} /> }
      {widthPercentage >= 70 ? <GoldenStar style={style.star} /> : <GrayStar style={style.star} /> }
      {widthPercentage >= 90 ? <GoldenStar style={style.star} /> : <GrayStar style={style.star} /> }
    </div>
  );
};

export default Stars;
