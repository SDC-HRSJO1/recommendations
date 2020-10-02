import React from 'react';
import styled from 'styled-components';
import Stars from './stars';
import Label from './label';

const Carousel = ({ cont }) => (
  <SilderWrapper>
    <ProductContainer>
      <ImageContainer>
        <Image src={cont.image_url} alt={cont.name} />
        <ButtonHeart>
          <svg width="100%" height="100%" viewBox="0 0 40 40">
            <path
              d="M 26.84 20.417 L 20 27.204 l -6.84 -6.787 A 3.67 3.67 0 0 1 12 17.739 C 12 15.677 13.71 14 15.815 14 a 3.82 3.82 0 0 1 2.754 1.159 l 1.43 1.467 l 1.433 -1.467 A 3.818 3.818 0 0 1 24.186 14 C 26.289 14 28 15.677 28 17.739 a 3.673 3.673 0 0 1 -1.16 2.678 M 19.986 30 l 0.014 -0.014 l 0.014 0.014 l 8.223 -8.116 l -0.018 -0.019 a 5.678 5.678 0 0 0 1.78 -4.126 C 30 14.569 27.398 12 24.187 12 A 5.829 5.829 0 0 0 20 13.762 A 5.827 5.827 0 0 0 15.815 12 C 12.604 12 10 14.569 10 17.739 a 5.68 5.68 0 0 0 1.782 4.126"
              fill="rgb(0, 109, 183)"
            />
          </svg>
        </ButtonHeart>
        <Label label ={cont.label} />
      </ImageContainer>
      <div>{cont.name}</div>
      <div>
        <Stars stars={cont.rating} />
        {`(${cont.rating})`}
      </div>
      <div>
        {`Reviews (${cont.reviews_count})`}
      </div>
      <div style={{ fontWeight: 'bold' }}>
        {cont.price}
      </div>
      <BagButton> Add to Bag </BagButton>
    </ProductContainer>
  </SilderWrapper>
);

export default Carousel;

/* Style */
const SilderWrapper = styled.div`
  display: inline-block;
  padding: 5px 38px;
  max-width: 100%;
  margin: 0.75rem -1.09375rem 0px;
`;

const ProductContainer = styled.div`
  font-size: 16px;
  position: relative;
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
  }
`;

const ButtonHeart = styled.button`
  position: absolute;
  top: 5px;
  left:5px;
  background-color: internal-light-dark(buttontext, rgb(170, 170, 170));
  border:1px solid rgb(224,224,224);
  height: 40px ;
  width:40px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  font-size: 15px;
  outline:none;
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
