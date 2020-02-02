import React from "react";
class Array2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr1: [2, 3, 5, 6, 7, 8],
      arr2: [],
      arr3: []
    };
  }
  handleClick = () => {
    let newData = [];
    let even = [];
    for (let i = 0; i < this.state.arr1.length; i++) {
      if (this.state.arr1[i] % 2 !== 0) {
        newData.push(this.state.arr1[i]);
      } else even.push(this.state.arr1[i]);
    }
    this.setState({
      arr2: newData,
      arr3: even
    });
  };
  render() {
    return (
      <div>
        {this.state.arr1.map(item => item)}
        <button onClick={() => this.handleClick()}>clickme</button>
        <div>Even No</div>
        {this.state.arr2.map(item => item)}
        <div>Odd No</div>
        {this.state.arr3.map(item => item)}
      </div>
    );
  }
}
export default Array2;
