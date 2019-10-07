import React from "react";
import { Route, Switch } from "react-router-dom";
import App1 from "./App1/App1";
import App2 from "./App2/App2";

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/app1" component={App1}></Route>
        <Route exact path="/app2" component={App2}></Route>
      </Switch>
    );
  }
}

export default Main;
