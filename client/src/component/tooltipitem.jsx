/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';

const TooltipItem = ({ product }) => {
  const categories = [product.department, product.category, product.subcategory];
  return (
    <div>
      <ul>
        <li>Description:</li>
        <span>
          {' '}
          {product.description}
          {' '}
        </span>
        <li> Shop more like this:</li>
        {categories.map((category) => (
          <span style={{ textDecoration: 'underline' }} key={category}>
            {' '}
            {category}
            {' '}
          </span>
        ))}
      </ul>
    </div>
  );
};

export default TooltipItem;
