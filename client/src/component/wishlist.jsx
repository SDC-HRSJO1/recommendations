import React from 'react';
import styled from 'styled-components';
import FilledHeart from '../style/filledheart.svg';
import EmptyHeart from '../style/emptyheart.svg';

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notInWishlist: this.props.wishlist,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      notInWishlist: !this.state.notInWishlist,
    });
  }

  render() {
    return (
      <ButtonHeart onClick={this.onClick}>
        {this.state.notInWishlist === true ? <FilledHeart /> : <EmptyHeart /> }
      </ButtonHeart>
    );
  }
}

export default Wishlist;

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
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
