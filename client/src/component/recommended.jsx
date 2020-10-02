import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Carousel from './carousel';
import Button from './button';

class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalData: [],
      totalNum: 0,
      indexList: [], // current page
      current: 1,
      pageSize: 4, // product number in the page
      totalPage: 0,
    };
    this.getUpdataState = this.getUpdataState.bind(this);
    this.pageNext = this.pageNext.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    axios.get('/2/recommendation/getInfo')
      .then((response) => {
        const productData = response.data;
        this.getUpdataState(productData);
        this.setPage(this.state.current);
      })
      .catch((error) => {
        console.log('get error', error);
      });
  }

  getUpdataState(data) {
    this.setState({
      totalData: data,
      totalNum: data.length,
      totalPage: Math.ceil(data.length/this.state.pageSize),
    });
  }

  setPage(num) {
    this.setState({
      indexList: this.state.totalData.slice(num, num + this.state.pageSize),
    });
  }

  pageNext(num) {
    this.setPage(num);
  }

  render() {
    return (
      <Wrapper>
        <Title> Recommended For You </Title>
        <Button {...this.state} pageNext={this.pageNext} />
        {this.state.indexList.map((cont) => (
          <Carousel key={cont.pid} cont={cont} />))}
      </Wrapper>
    );
  }
}

export default Recommended;

/* Style */
const Title = styled.h2`
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: '0.83em';
  margin-inline-start: '0px';
  margin-inline-end: '0px';
  font-family: 'Nunito Sans, sans-serif';
  font-size: '2rem';
  line-height: '2.6876rem';
  font-weight: '400';
`;

const Wrapper = styled.div`
  padding: 0px 0.75rem;
  margin: 0px auto;
  width: 100%;
  max-width: 82.5rem;
`;
