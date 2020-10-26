/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './carousel';
import PageButton from './pagebutton';

class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: Math.ceil(Math.random() * 10000000),
      totalData: [],
      totalNum: 0,
      indexList: [], // current page
      current: 1,
      pageSize: 4, // product number in the page
      totalPage: 0,
    };
    this.getUpdateState = this.getUpdateState.bind(this);
    this.pageNext = this.pageNext.bind(this);
    this.setPage = this.setPage.bind(this);
    this.scollLeft = this.scollLeft.bind(this);
    this.scollRight = this.scollRight.bind(this);
  }

  componentDidMount() {
    axios.get(`/${this.state.pid}`)
      .then((response) => {
        const productData = response.data;
        // console.log(productData);
        this.getUpdateState(productData);
        this.setPage(this.state.current);
      })
      .catch((error) => {
        console.log('get error', error);
      });
  }

  getUpdateState(data) {
    const { pageSize } = this.state;
    this.setState({
      totalData: data,
      totalNum: data.length,
      totalPage: Math.ceil(data.length / pageSize),
    });
  }

  setPage(num) {
    const { pageSize, totalData } = this.state;
    this.setState({
      indexList: totalData.slice(num, num + pageSize),
    });
  }

  pageNext(num) {
    this.setPage(num);
  }

  scollLeft() {
    document.getElementById('container').scrollLeft -= 600;
  }

  scollRight() {
    document.getElementById('container').scrollLeft += 600;
  }

  render() {
    return (
      <RecommendBody>
        <Wrapper>
          <TitlePageButtonWrapper>
            <Title>{`Recommended For You (Current: Product #${this.state.pid})`}</Title>
            <PageButton {...this.state} pageNext={this.pageNext} />
          </TitlePageButtonWrapper>
          <ContainWrapper id="wrapper">
            {/* <ArrowMove onClick={this.scollLeft}> &lt; </ArrowMove> */}
            <ScrollContain id="container">
              {this.state.indexList.map((product) => (
                <Carousel key={`${product.id}: ${product.brand} ${product.title}`} product={product} />))}
            </ScrollContain>
            {/* <ArrowMove onClick={this.scollRight}> &gt; </ArrowMove> */}
          </ContainWrapper>
        </Wrapper>
      </RecommendBody>
    );
  }
}

export default Recommended;

/* Style */
const RecommendBody = styled.div`
  margin: 0px auto;
  padding-bottom: 2rem;
`;

const Wrapper = styled.div`
  max-width: 100%;
  max-width: 82.5rem;
`;
const TitlePageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h2`
  font-family: Cera Pro, sans-serif;
  font-size: 2rem;
  line-height: 2.6876rem;
  font-weight: 400;
  scroll-behavior: smooth;
`;
const ContainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ScrollContain = styled.div`
  display: flex;
  position: relative
`;

// const ArrowMove = styled.button`
//   height: 36px;
//   width: 36px;
//   background: transparent;
//   border-radius: 50%;
//   border:1px solid rgb(224,224,224);
//   cursor: pointer;
//   transition: transform ease-in 0.1s;
//   outline:none;
//   &:hover {
//     transform: scale(1.1);
//   }
//   `;
