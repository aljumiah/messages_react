import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class MessageList extends Component {
  state = {
    replay_content: "",
    message: ""
  };
  async componentDidMount() {
    await this.setState({ message: this.props.message.id });
  }
  changeHandlerReplay = e => {
    this.setState({ replay_content: e.target.value });
  };
  submitHandler = async e => {
    e.preventDefault();
    await this.props.sendReplay(this.state);
  };

  render() {
    const message = this.props.message;
    return (
      <>
        {!message.replied_message ? (
          <li
            data-toggle="modal"
            data-target={`#exampleModalCenter${message.id}`}
            style={{
              marginTop: 10,
              border: "1px solid #00000020",
              borderRadius: 10
            }}
            className="list-group-item "
          >
            {message.content}
          </li>
        ) : (
          <li
            data-toggle="modal"
            data-target={`#exampleModalCenter${message.id}`}
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
              {message.content}
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
                {message.replied_message.replay_content}
              </div>
            </div>
          </li>
        )}

        <div
          className="modal fade"
          id={`exampleModalCenter${message.id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{message.content}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => this.props.deleteMessage(message.id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  data-toggle="modal"
                  data-target={`#exampleModal${message.id}`}
                  data-dismiss="modal"
                >
                  Replay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id={`exampleModal${message.id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Replay Message[{message.id}]
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="col-form-label">Message:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={message.content}
                      disabled="disabled"
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Message Back:</label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      onChange={this.changeHandlerReplay}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={this.submitHandler}
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    sendReplay: message => dispatch(actionCreators.sendReplay(message)),
    deleteMessage: id => dispatch(actionCreators.deleteMessage(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
