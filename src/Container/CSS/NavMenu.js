import React, { Component } from "react";
import "./margin.css";

export default class NavMenu extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <div style={{ paddingRight: 100 }}>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li>
            <li>menu5</li>
          </div>
        </ul>
      </div>
    );
  }
}
