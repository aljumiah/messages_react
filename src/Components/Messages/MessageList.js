import React, { Component } from "react";
import { connect } from "react-redux";

class MessageList extends Component {
  render() {
    const message = this.props.message;
    return (
      <li
        style={{
          marginTop: 10,
          border: "1px solid #00000020",
          borderRadius: 10
        }}
        className="list-group-item"
      >
        {message.content}
      </li>
    );
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
