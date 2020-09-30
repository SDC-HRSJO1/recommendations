import React from 'react';
import axios from 'axios';
import Product from './product.jsx';
import Scroll from './scroll.jsx';
import styles from './main.module.css';

class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    axios.get('/1/recommendation/getInfo')
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
    return (
      <div>
        <h2 className={styles.title}> Recommended For You </h2>
        <Scroll />
        <Product products={this.state.products} />
      </div>
    );
  }
}

export default Recommended;
