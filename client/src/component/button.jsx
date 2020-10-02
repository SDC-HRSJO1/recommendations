import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      pagenum: this.props.current
    }
    this.setNext = this.setNext.bind(this);
    this.setPrev = this.setPrev.bind(this);
  }

  setNext() {
    if(this.state.pagenum < this.props.totalPage) {
      this.setState({
        num: this.state.num + this.props.pageSize,
        pagenum: this.state.pagenum + 1
      }, function () {
        console.log(this.state)
        this.props.pageNext(this.state.num)
      })
    }
  }

  setPrev() {
    if (this.state.pagenum > 1) {
      this.setState({
        num: this.state.num - this.props.pageSize,
        pagenum:this.state.pagenum - 1
      },function () {
        console.log(this.state)
        this.props.pageNext(this.state.num)
      })
    }
  }

  render() {
    return (
      <div align="right">
        <p> {this.state.pagenum} / {this.props.totalPage} </p>
        <Circle onClick={this.setPrev}> &lt; </Circle>
        <span style={{ marginLeft: '8px' }}>  </span>
        <Circle Circle onClick={this.setNext}> &gt; </Circle>
      </div>

    );
  }
}

export default Button;

/* Style */
const Circle = styled.button`
  background-color: transparent;
  border:1px solid rgb(224,224,224);
  height: 32px ;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 32px;
  font-size: 15px;
  outline:none;
`;
