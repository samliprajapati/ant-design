import React, { Component } from "react";

export default class UseData extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div style={{ height: "80vh", width: "80vw", backgroundColor: "tomato" }}>
        <span>
          <div>
            {this.props.data.userName}
            <br />
            {this.props.data.dateOfBirth}
            <br />
            {this.props.data.address}
            <br />
            {this.props.data.heightQualification}
          </div>
        </span>
      </div>
    );
  }
}
