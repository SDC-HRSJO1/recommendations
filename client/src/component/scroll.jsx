import React from 'react';
import style from '../style/style.css.jsx';

const Scroll = () => (
  <div>
    <button type="button" style={style.circle}> &lt; </button>
    <span style={{ 'margin-left': '8px' }}> </span>
    <button type="button" style={style.circle}> &gt; </button>
  </div>
);

export default Scroll;
