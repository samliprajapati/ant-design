import React, { Component } from "react";
class Object extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object1: {
        userName: "samli",
        age: "23"
      },
      object2: {
        userName: "Riya",
        age: "16"
      },
      object3: {}
    };
  }
  handleClick = () => {
    this.setState({ object3: { userName: "priya", age: "18" } });
  };
  render() {
    return (
      <div>
        <div>
          {this.state.object1.userNa9ime}-{this.state.object1.age}
        </div>
        <div>
          {this.state.object2.userName}-{this.state.object2.age}
        </div>
        <button onClick={() => this.handleClick()}>click</button>
        <div>
          {this.state.object3.userName}-{this.state.object3.age}
        </div>
      </div>
    );
  }
}
export default Object;
