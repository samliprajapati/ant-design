import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import App from "../../App";
import Counter from "../Counter";
import Array1 from "../Array1";
import Array2 from "../Array2";
import UserDetails from "../UserDetails";
import Margin from "../CSS/Margin";
import NavMenu from "../CSS/NavMenu";
import Flex from "../CSS/Flex";
import FlexWrap from "../CSS/FlexWrap";
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
          <Route exact path="/user_details" component={UserDetails} />
          <Route exact path="/margin" component={Margin} />
          <Route exact path="/navmenu" component={NavMenu} />
          <Route exact path="/flex" component={Flex} />
          <Route exact path="/flexwrap" component={FlexWrap} />
        </Switch>
      </div>
    );
  }
}
export default Layout;
