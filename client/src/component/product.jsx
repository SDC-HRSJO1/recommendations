import React from 'react';
import Stars from './Stars.jsx';
import styles from './main.module.css';

const Product = ({ products }) => (
  <div>
    {products.map((product) => (
      <ul className={styles.list} key={product.pid}>
        <li className={styles.text}>
          <img src={product.image_url} alt={product.name} className={styles.image} />
          <li>{product.name}</li>
          <li>
            <Stars stars={product.rating} />
          </li>
          <li>
            Reviews
            (
            {product.reviews_count}
            )
          </li>
          <li className={styles.price}>
            {product.price}
          </li>
          <button type="button" className={styles.bag}> Add to Bag </button>
        </li>
      </ul>
    ))}
  </div>
);

export default Product;
