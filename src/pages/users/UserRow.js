import React, { Component } from "react";

export default class UserRow extends Component {
  emitRowId() {
    this.props.onRowDelete(this.props.user.id);
  }

  emitRowEdit() {
    this.props.onRowEdit(this.props.user);
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.props.idx}</th>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.email}</td>
        <td>
          {this.props.user.address.street} {this.props.user.address.suite}
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.emitRowId.bind(this)}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.emitRowEdit.bind(this)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}
