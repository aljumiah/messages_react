import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  state = {
    user: "",
    content: ""
  };
  changeHandlerMessage = e => {
    this.setState({ content: e.target.value });
  };
  submitHandler = async e => {
    e.preventDefault();
    await this.props.sendMessage(this.state, this.props.history);
  };
  async componentDidMount() {
    const username = this.props.match.params.username;
    await this.props.getUsername(username);
    if (this.props.username) {
      await this.setState({ user: this.props.username.id });
      console.log(username);
      console.log("userBack", this.props.username.id);
    }
  }
  render() {
    return this.props.username ? (
      <>
        <form onSubmit={this.submitHandler}>
          <textarea
            class="form-control"
            aria-label="With textarea"
            onChange={this.changeHandlerMessage}
          />
          <button type="submit" className="btn btn-primary">
            send
          </button>
        </form>
      </>
    ) : (
      <div>this profile does not exist</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.profileReducer.username
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsername: username => dispatch(actionCreators.getUsername(username)),
    sendMessage: (data, history) =>
      dispatch(actionCreators.sendMessage(data, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
