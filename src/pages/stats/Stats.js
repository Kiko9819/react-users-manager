import React, { Component } from "react";
import {store} from '../../redux/store';

export default class Stats extends Component {

  render() {
    const {users, created, updated, deleted} = store.getState();

    return (
      <div>
          <div className="card mb-4 shadow-sm mt-5">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Total Users</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {users.length}
              </h1>
            </div>
          </div>
        <div className="card-deck mb-3 text-center mt-5">
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-success text-white">
              <h4 className="my-0 font-weight-normal">Created</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {created}
              </h1>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-warning">
              <h4 className="my-0 font-weight-normal">Updated</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {updated}
              </h1>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-danger text-white">
              <h4 className="my-0 font-weight-normal">Deleted</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {deleted}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
