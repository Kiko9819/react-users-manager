import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron my-5">
        <h1 className="display-4">Welcome, User!</h1>
        <p className="lead">
          This is a simple react application that uses Redux to manage users
        </p>
        <hr className="my-4" />
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/users">
            See Users
          </Link>
        </p>
      </div>
    );
  }
}

export default Home;
