import React, { Component } from "react";
import "./flex.css";

export default class FlexWrap extends Component {
  render() {
    return (
      <div>
        <p>Flex-wrap:"stretch"</p>
        <div className="mainclass">
          <div className="Box1">1</div>
          <div className="Box1">2</div>
          <div className="Box1">3</div>

          <div className="Box1">4</div>
          <div className="Box1">5</div>
          <div className="Box1">6</div>
        </div>
      </div>
    );
  }
}
