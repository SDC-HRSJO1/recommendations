import React from 'react';
import axios from 'axios';
import Carousel from './carousel.jsx';
import style from '../style/style.css.jsx';

class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    axios.get('/2/recommendation/getInfo')
      .then((response) => {
        const productData = response.data;
        this.getProducts(productData);
        // console.log(this.state.products)
      })
      .catch((error) => {
        console.log('get error', error);
      });
  }

  getProducts(data) {
    this.setState({
      products: data,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div style={style.container}>
        <h2 style={style.title}> Recommended For You </h2>
        <Carousel products={products} />
      </div>
    );
  }
}

export default Recommended;
