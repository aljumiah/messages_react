import React, { Component } from "react";
import { connect } from "react-redux";
import MessageList from "./MessageList";
import { Redirect } from "react-router-dom";

class Messages extends Component {
  async componentDidMount() {
    // await this.props.fetchMessages();
    console.log(this.props.messages);
  }
  render() {
    const Messages = this.props.messages.map(message => (
      <MessageList message={message} key={message.id} />
    ));
    return this.props.user ? (
      <div className="container">
        <div className="card" style={{ width: "100%", border: "none" }}>
          <ul className="list-group list-group-flush">{Messages}</ul>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    messages: state.messagesReducer.messages
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
