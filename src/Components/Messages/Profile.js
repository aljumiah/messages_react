import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import userImage from "../../assets/images/user.jpg";
import ReplayList from "./ReplayList";
// import BackgroundImage from "../../assets/images/background_profile.jpg";
class Profile extends Component {
  state = {
    user: "",
    content: ""
  };
  changeHandlerMessage = e => {
    this.setState({ content: e.target.value });
  };
  handleClearForm = e => {
    this.setState({ content: "" });
    this.props.clearInfoMessage();
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
      await this.props.fetchReplays(this.props.username.username);
      console.log(username);
      console.log("userBack", this.props.username.id);
    }
  }
  render() {
    const username = this.props.username;
    const Replays = this.props.replays.map(message => (
      <ReplayList message={message} />
    ));
    return this.props.username ? (
      <div className="container">
        <div className="col-sm-12 ">
          <div className="col-sm-12 d-flex justify-content-center">
            <img
              className="rounded-circle rounded-circle_border border"
              src={username.profile.image ? username.profile.image : userImage}
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                textAlign: "center",
                margin: 5,
                display: "block",
                marginLeft: 5,
                padding: 2
              }}
            />
          </div>
          <div
            className="col-sm-12 d-flex justify-content-center"
            style={{ fontWeight: 700 }}
          >
            {username.username}
          </div>
        </div>
        <div className="container col-sm-12">
          {this.props.infoMessage ? (
            <div className="col-sm-12 ">
              <div className="col-sm-12">{this.props.infoMessage}</div>
              <div className="col-sm-12">
                <button onClick={this.handleClearForm} className="btn btn-dark">
                  Click here
                </button>{" "}
                to send another message
              </div>
            </div>
          ) : (
            <form onSubmit={this.submitHandler}>
              <textarea
                style={{ height: 200 }}
                className="form-control"
                aria-label="With textarea"
                onChange={this.changeHandlerMessage}
              />
              <div className="d-flex justify-content-center">
                {this.state.content.length > 0 ? (
                  <button
                    style={{ width: 120 }}
                    type="submit"
                    className="btn btn-success m-3"
                  >
                    send
                  </button>
                ) : (
                  <p
                    style={{ width: 120, color: "#747474" }}
                    className="m-3 btn btn-dark m-3"
                  >
                    Send
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
        <div className="card" style={{ width: "100%", border: "none" }}>
          <ul className="list-group list-group-flush">{Replays}</ul>
        </div>
      </div>
    ) : (
      <div>this profile does not exist</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.profileReducer.username,
    infoMessage: state.infoMessageReducer.infoMessage,
    replays: state.messagesReducer.replays
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsername: username => dispatch(actionCreators.getUsername(username)),
    clearInfoMessage: () => dispatch(actionCreators.clearInfoMessage()),
    sendMessage: (data, history) =>
      dispatch(actionCreators.sendMessage(data, history)),
    fetchReplays: username => dispatch(actionCreators.fetchReplays(username))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
