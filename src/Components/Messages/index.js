import React, { Component } from "react";
import { connect } from "react-redux";
import MessageList from "./MessageList";
import * as actionCreators from "../../store/actions";

class Messages extends Component {
  async componentDidMount() {
    // await this.props.fetchMessages();
    console.log(this.props.messages);
  }
  render() {
    const Messages = this.props.messages.map(message => (
      <MessageList message={message} />
    ));
    return <div>{Messages}</div>;
  }
}

const mapStateToProps = state => {
  return {
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
