import React, { Component } from "react";
import "./flex.css";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

export default class Flex extends Component {
  //   constructor(props) {
  //     super(props);
  //     {
  //       this.state = {
  //         flex: "",
  //         searchdata: ""
  //       };
  //     }
  //   }
  //   handlechange = event => {
  //     this.setState({
  //       flex: event.target.value
  //     });
  //     console.log(this.state.flex);
  //   };
  //   handleSearch = flex => {
  //     this.setState({
  //       searchdata: this.state.flex
  //     });
  //     console.log(this.state.searchdata);
  //   };
  render() {
    return (
      <div className="Body">
        <h1>Flex-Box mini Project</h1>
        <Link to="/flexwrap">Flex-wrap</Link>
        {/* <Input
          placeholder="Search"
          className="input"
          onChange={this.handlechange}
        />
        <Button
          type="primary"
          icon="search"
          className="button"
          onClick={() => this.handleSearch(this.state.flex)}
        >
          Search
        </Button> */}
      </div>
    );
  }
}
