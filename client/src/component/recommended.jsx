import React from 'react';
import axios from 'axios';
import Product from './product.jsx';
import Scroll from './scroll.jsx';
import style from '../style/style.css.jsx';
import main from './main.module.css';

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
      <div className={main.container}>
        <h2 style={style.title}> Recommended For You </h2>
        <Scroll />
        <Product products={products} />
      </div>
    );
  }
}

export default Recommended;
