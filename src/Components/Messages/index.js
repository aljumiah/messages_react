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
    const Messages = this.props.messages.map(
      message =>
        !message.replied_message && (
          <MessageList message={message} key={message.id} />
        )
    );
    const MessagesReplied = this.props.messages.map(
      message =>
        message.replied_message && (
          <MessageList message={message} key={message.id} />
        )
    );
    return this.props.user ? (
      <div className="container">
        <div className="card" style={{ width: "100%", border: "none" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-primary mt-4">
              New
            </li>
            {Messages}
          </ul>
        </div>
        <div className="card" style={{ width: "100%", border: "none" }}>
          <ul className="list-group list-group-flush mt-4">
            <li className="list-group-item list-group-item-success">Replied</li>
            {MessagesReplied}
          </ul>
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
