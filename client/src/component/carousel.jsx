import React from 'react';
import styled from 'styled-components';
import Stars from './stars';
import Label from './label';
import Wishlist from './wishlist';
import TooltipItem from './tooltipitem';

const Carousel = ({ prdts }) => (
  <ProductContainer>
    <ImageContainer>
      <Picture src={prdts.image_url} alt={prdts.name} />
      <Wishlist wishlist={prdts.wishlist} />
      <Label label={prdts.label} />
    </ImageContainer>
    <ToolTipText><TooltipItem details={prdts} /></ToolTipText>
    <div>
      {prdts.name}
    </div>
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
  height: 100%;
  padding: 0 1.8rem;
  max-width: 100%;
  margin: 0.75rem -1.09375rem 0px;
  font-size: 16px;
  line-height: 1.5625rem;
  font-weight: 500;
  list-style: none;
  font-family: Cera Pro, sans-serif;
  border: 2px solid transparent;
  position: relative;
`;

const Picture = styled.img`
  object-fit: fit;
  width:100%;
  height:100%;
  &:hover {
    transform: scale(1.1);
  };
`;

const ToolTipText = styled.div`
  visibility: hidden;
  width: 80%;
  background-color: white;
  color: rgb(0, 109, 183);
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 6px;
  padding: 5px 0;
  -webkit-border-radius: 5px;
  opacity: 0;
  transition: opacity 1s;

  :before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid white;
    left: -8px;
    top: 7px;
  }

  /* Position the tooltip */
  top: 20%;
  left: 50%;
  position: absolute;
  z-index: 1;


  ${ProductContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 286px;
  height: 286px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
  overflow: hidden;
`;

const BagButton = styled.button`
outline-style: none;
font-size: 1rem;
font-weight: 500;
padding: 0.625rem;
display: block;
width: 100%;
border-width: 2px;
border-style: solid;
border-radius: 4px;
border-collapse: collapse;
background-color: rgb(253,128,36);
border-color: rgb(253,128,36);
color: rgb(0,0,0);
font-family: Cera Pro, sans-serif;
&:hover {
  background-color: transparent;
  cursor: pointer;
}
`;
