import React from 'react';
import Stars from './stars.jsx';
import Button from './button.jsx'
import style from '../style/style.css.jsx';
import Heart from '../style/heart.svg';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.changeBackground = this.changeBackground.bind(this);
    this.returnBackground = this.returnBackground.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  changeBackground(event) {
    event.preventDefault();
    event.target.style.backgroundColor = 'transparent';
  }

  returnBackground(event) {
    event.preventDefault();
    event.target.style.backgroundColor = 'rgb(253,128,36)';
  }

  next() {
    document.getElementById('container').scrollLeft += 300;
  }

  previous() {
    document.getElementById('container').scrollLeft -= 300;
  }

  render() {
    return (
      <div>
        <Button next ={this.next} previous={this.previous} />
        <div style={style.productContainer} id="container">
          {this.props.products.map((product) => (
            <ul key={product.pid}>
              <li style={style.product}>
                <img src={product.image_url} style={{ height: '286px', width: '286px' }} alt={product.name} />
                <div>{product.name}</div>
                <div>
                  <Stars stars={product.rating} />
                  {`(${product.rating})`}
                </div>
                <div>
                  {`Reviews (${product.reviews_count})`}
                </div>
                <div style={{ fontWeight: 'bold' }}>
                  {product.price}
                </div>
                <button type="button" style={style.bag} onMouseOver={this.changeBackground} onMouseOut ={this.returnBackground }> Add to Bag </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
