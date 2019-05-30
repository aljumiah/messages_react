import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import userImage from "../../assets/images/user.jpg";
import * as actionCreators from "../../store/actions";

class Home extends Component {
  async componentDidMount() {
    await this.props.getProfile();
  }

  render() {
    // const user = this.props.user;
    // const profile = this.props.profile;
    // console.log("from com", this.props.profile.image);
    return this.props.user ? (
      <div className="container">
        <div className="col-sm-12 ">
          <div className="col-sm-12 d-flex justify-content-center">
            <img
              alt="profile-image"
              className="rounded-circle rounded-circle_border border"
              src={userImage}
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
            {this.props.user.username}
          </div>
          <div className="col-sm-12">
            <ul className="list-group">
              <li
                style={{ background: "#f1f7ff" }}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>example.com/{this.props.user.username}</span>
              </li>
              <li
                style={{ background: "#f1f7ff" }}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{this.props.user.email}</span>
              </li>
            </ul>
          </div>
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
    profile: state.profileReducer.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(actionCreators.getProfile())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
