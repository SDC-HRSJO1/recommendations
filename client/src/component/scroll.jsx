import React from 'react';
import styles from './main.module.css';

const Scroll = () => (
  <div className={styles.scrollContainer}>
    <button type="button" className={styles.circle}> &lt; </button>
    <span className={styles.space}> </span>
    <button type="button" className={styles.circle}> &gt; </button>
  </div>
);

export default Scroll;
