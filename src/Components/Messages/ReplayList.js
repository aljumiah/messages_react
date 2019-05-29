import React, { Component } from "react";
import { connect } from "react-redux";

class MessageList extends Component {
  render() {
    const message = this.props.message;
    return (
      <li
        style={{
          marginBottom: 10,
          border: "1px solid #00000020",
          borderRadius: 10,
          background: "#f1f7ff"
        }}
        className="list-group-item col-sm-12"
      >
        <div
          className="col-sm-12"
          style={{
            marginTop: 10,
            border: "1px solid #fff",
            borderRadius: 10,
            padding: 10,
            background: "#fff"
          }}
        >
          {message.message.content}
          <div
            className="col-sm-12"
            style={{
              marginTop: 10,
              border: "1px solid #dcf8be",
              borderRadius: 10,
              padding: 10,
              background: "#dcf8be"
            }}
          >
            {message.replay_content}
          </div>
        </div>
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
