import React from "react";
import { connect } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ auth, ...restProps }) {
  return isLoaded(auth) && !isEmpty(auth) ? <Outlet /> : <Navigate to="/" />;
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
