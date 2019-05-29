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

        <div
          className="modal fade"
          id={`exampleModalCenter${message.id}`}
          tabindex="-1"
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
                <button type="button" className="btn btn-danger">
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
          class="modal fade"
          id={`exampleModal${message.id}`}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Replay Message[{message.id}]
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      Message:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={message.content}
                      disabled="disabled"
                    />
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Message Back:
                    </label>
                    <textarea
                      class="form-control"
                      id="message-text"
                      onChange={this.changeHandlerReplay}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
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
    sendReplay: message => dispatch(actionCreators.sendReplay(message))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
