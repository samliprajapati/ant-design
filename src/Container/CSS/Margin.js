import React from "react";
import "./margin.css";
class Margin extends React.Component {
  render() {
    return (
      <div>
        <div className="main">
          <div className="first">
            <p>Margin auto</p>
          </div>
          <div className="second">
            <p>margin 30px</p>
          </div>
          <div className="third">
            <p>margin 30px auto</p>
          </div>
          <div className="fourth">
            <p>margin auto 30px</p>
          </div>
          <div className="fifth">
            <p>margin 30px 30px 30px 30px</p>
          </div>
          <div className="sixth">
            <p>margin 30px 10px 10px 30px</p>
          </div>
          <div className="seventh">
            <p>margin 40px 30px 20px 10x</p>
          </div>
          <div className="eight">
            <p>padding auto</p>
          </div>
        </div>
        <span className="scnd">Hello</span>
        <span className="scnd">samli</span>
      </div>
    );
  }
}
export default Margin;
