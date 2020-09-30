import React from 'react';
import Stars from './Stars.jsx';
import style from '../style/style.css.jsx';
import Heart from '../style/heart.svg';

const Product = ({ products }) => (
  <div>
    {products.map((product) => (
      <ul key={product.pid} style={{ height: '400px', width: '300px', border: '1px solid grey', display: 'inline-block'} }>
        <div>
          <img src={product.image_url} style={{ height: '286px', width: '286px' }} alt={product.name} />
          <div>{product.name}</div>
          <div>
            <Stars stars={product.rating} /> ({product.rating})</div>
          <div>
            Reviews
            (
            {product.reviews_count}
            )
          </div>
          <div style={{ fontWeight: 'bold' }}>
            {product.price}
          </div>
          <button type="button" className={style.bag}> Add to Bag </button>
        </div>
      </ul>
    ))}
  </div>
);

export default Product;
