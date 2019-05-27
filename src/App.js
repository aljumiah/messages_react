import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Messages from "./Components/Messages";
import NavBar from "./Components/NavBar";
import { connect } from "react-redux";
import Profile from "./Components/Messages/Profile";
import Sent from "./Components/Sent";
// Actions
import * as actionCreators from "./store/actions";

class App extends Component {
  async componentDidMount() {
    await this.props.checkForExpiredToken();
    await this.props.fetchMessages();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/:username" component={Profile} />
          <Route exact path="/sent" component={Sent} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),
    fetchMessages: () => dispatch(actionCreators.fetchMessages())
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
