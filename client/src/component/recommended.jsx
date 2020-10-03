import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Carousel from './carousel';
import PageButton from './pagebutton';

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
      translate: 0,
      transition: 0.45
    };
    this.getUpdateState = this.getUpdateState.bind(this);
    this.pageNext = this.pageNext.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    axios.get('/2/recommendation/getInfo')
      .then((response) => {
        const productData = response.data;
        this.getUpdateState(productData);
        this.setPage(this.state.current);
      })
      .catch((error) => {
        console.log('get error', error);
      });
  }

  getUpdateState(data) {
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
        <PageButton {...this.state} pageNext={this.pageNext} />
        <ScrollContain>
          {this.state.indexList.map((prdts) => (
            <Carousel key={prdts.pid} prdts={prdts} />))}
        </ScrollContain>
        <ArrowLeft > Left </ArrowLeft>
        <ArrowRight > Right </ArrowRight>
      </Wrapper>
    );
  }
}

export default Recommended;

/* Style */
const Title = styled.h2`
  display: flex;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: 'Nunito Sans, sans-serif';
  font-size: 2rem;
  line-height: 2.6876rem;
  font-weight: 400;
`;

const Wrapper = styled.div`
  padding: 0px 0.75rem;
  margin: 0px auto;
  max-width: 100%;
  max-width: 82.5rem;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (max-width: 1024px) {
    scroll-behavior: smooth;
  }
`;

const ScrollContain = styled.div`
  display:flex;
  overflow: auto;
  postion: relative;
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
`;

const ArrowLeft = styled.button`
  display: flex;
  position: absolute;
  top: 50%;
  height: 36px;
  width: 36px;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  border:1px solid rgb(224,224,224);
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  outline:none;
  &:hover {
    transform: scale(1.1);
  }
  `;
const ArrowRight = styled(ArrowLeft)`
  right: 0;
`;
