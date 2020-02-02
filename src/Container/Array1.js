import React from "react";
class Array1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array1: [5, 10, 15, 20, 25],
      array2: []
    };
  }
  handleChange = () => {
    this.setState({
      array2: this.state.array1.map(item => item * 5)
    });
  };
  render() {
    return (
      <div>
        {this.state.array1.map(item => item)}
        <button onClick={() => this.handleChange()}>Click Me</button>
        {this.state.array2.map(item => {
          console.log(item);
          return <div>{item}</div>;
        })}
      </div>
    );
  }
}
export default Array1;
