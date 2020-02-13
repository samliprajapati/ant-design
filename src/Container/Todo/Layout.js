import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import App from "../../App";
import Counter from "../Counter";
import Array1 from "../Array1";
import Array2 from "../Array2";
import Margin from "../CSS/Margin";
class Layout extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/todo" component={App} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/array1" component={Array1} />
          <Route exact path="/array2" component={Array2} />
          <Route exact path="/margin" component={Margin} />
        </Switch>
      </div>
    );
  }
}
export default Layout;
