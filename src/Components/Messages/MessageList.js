import React, { Component } from "react";
import { connect } from "react-redux";

class MessageList extends Component {
  render() {
    const message = this.props.message;
    return <ul>{message.content}</ul>;
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
