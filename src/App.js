import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Messages from "./Components/Messages";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/messages" component={Messages} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
