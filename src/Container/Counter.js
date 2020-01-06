/*
using Constructor
*/
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Todo from "./Todo";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        {this.state.count}
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increase
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Decrease
        </Button>
        <div>{/* <Todo /> */}</div>
      </div>
    );
  }
}
export default Counter;

/*
using constructor with function
*/
// import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   Increase = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   Decrease = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   render() {
//     return (
//       <div>
//         {this.state.count}
//         <br />
//         <Button variant="contained" color="primary" onClick={this.Increase}>
//           Increase
//         </Button>
//         <Button variant="contained" color="secondary" onClick={this.Decrease}>
//           Decrease
//         </Button>
//       </div>
//     );
//   }
// }
// export default Counter;

/*
using hooks
*/
// import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {count}
//       <br />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => setCount(count + 1)}
//       >
//         Increase
//       </Button>
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={() => setCount(count - 1)}
//       >
//         Decrease
//       </Button>
//     </div>
//   );
// }
// export default Counter;
