import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class SignupForm extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: ""
  };

  changeHandlerUsername = e => {
    this.setState({ username: e.target.value });
  };
  changeHandlerPassword = e => {
    this.setState({ password: e.target.value });
  };
  changeHandlerFirst = e => {
    this.setState({ first_name: e.target.value });
  };
  changeHandlerLast = e => {
    this.setState({ last_name: e.target.value });
  };
  changeHandlerEmail = e => {
    this.setState({ email: e.target.value });
  };
  submitHandler = async e => {
    e.preventDefault();
    await this.props.signup(this.state, this.props.history);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            aria-describedby="emailHelp"
            placeholder=""
            onChange={this.changeHandlerFirst}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            aria-describedby="emailHelp"
            placeholder=""
            onChange={this.changeHandlerLast}
          />
        </div>
        <div className="form-group">
          <label className="sr-only">Username</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">localhost /</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Username"
              onChange={this.changeHandlerUsername}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@example.com"
            onChange={this.changeHandlerEmail}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={this.changeHandlerPassword}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
