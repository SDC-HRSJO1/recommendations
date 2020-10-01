import React from 'react';
import style from '../style/style.css.jsx';

const Button = ({ next, previous }) => (
  <div align="right">
    <button type="button" style={style.circle} onClick={previous}> &lt; </button>
    <span style={{ marginLeft: '8px' }}>  </span>
    <button type="button" style={style.circle} onClick={next}> &gt; </button>
  </div>
);

export default Button;
