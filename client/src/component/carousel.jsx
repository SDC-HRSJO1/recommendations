import React from 'react';
import styled from 'styled-components';
import Stars from './stars';
import Label from './label';
import Wishlist from './wishlist';

const Carousel = ({ prdts }) => (
  <ProductContainer>
    <ImageContainer>
      <Image src={prdts.image_url} alt={prdts.name} />
      <ToolTipText> {prdts.name}</ToolTipText>
      <Wishlist wishlist={prdts.wishlist} />
      <Label label={prdts.label} />
    </ImageContainer>
    <div>{prdts.name}</div>
    <div>
      <Stars stars={prdts.rating} />
      {`(${prdts.rating.toFixed(2)})`}
    </div>
    <div>
      {`Reviews (${prdts.reviews_count})`}
    </div>
    <div style={{ fontWeight: 'bold' }}>
      {prdts.price}
    </div>
    <BagButton> Add to Bag </BagButton>
  </ProductContainer>
);
export default Carousel;

/* Style */

const ProductContainer = styled.div`
  padding: 5px 38px;
  max-width: 100%;
  margin: 0.75rem -1.09375rem 0px;
  font-size: 16px;
  line-height: 1.5625rem;
  font-weight: 500;
  list-style: none;
  font-family: Nunito Sans, sans-serif;

`;

const ImageContainer = styled.div`
  position: relative;
  width: 286px;
  height: 286px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: fit;
  width:100%;
  height:100%;
  &:hover {
    transform: scale(1.25);
    transition: 200ms ease-in-out;
    .ToolTipText{
      visiblity: visible;
    }
  }
`;

const ToolTipText = styled.div`
  visiblity: hidden;
  width:120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-raidus: 6px;
  position: absolut;
  z-index:1;
`;

const BagButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.625rem;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-collapse: collapse;
  background-color: rgb(253,128,36);
  border-color: rgb(253,128,36);
  color: rgb(0,0,0);
  font-family: Nunito Sans, sans-serif;
  &:hover {
    background-color: transparent;
  }
`;
