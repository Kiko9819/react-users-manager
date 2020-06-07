import React, { Component } from "react";
import { connect } from "react-redux";
import UserRow from "./UserRow";
import { UserEditForm } from "./UserEditForm";
import { fetchUsers, deleteUser, updateUser, createUser } from "../../api/api";
import { selectUserToUpdate, clearUserForm } from "../../redux/actions";

class Users extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  handleRowDelete(id) {
    this.props.dispatch(deleteUser(id));
  }

  handleRowEdit(user) {
    this.props.dispatch(selectUserToUpdate(user));
  }

  handleClearProps() {
    this.props.dispatch(clearUserForm());
  }

  handleFormSubmit(user) {
    if (this.props.selectedUser) {
      this.props.dispatch(updateUser(user));
    } else {
      this.props.dispatch(createUser(user));
    }
  }

  render() {
    const { error, loading, users } = this.props;
    let content;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (users.length) {
      content = users.map((user, index) => (
        <UserRow
          loading={loading}
          onRowDelete={this.handleRowDelete.bind(this)}
          onRowEdit={this.handleRowEdit.bind(this)}
          key={user.id}
          user={user}
          idx={index}
        />
      ));
    } else {
      content = (
        <tr>
          <td colSpan="5">Users list is empty</td>
        </tr>
      );
    }

    return (
      <div className="d-flex flex-column justify-content-center">
        <UserEditForm
          selectedUser={this.props.selectedUser}
          onFormSubmit={this.handleFormSubmit.bind(this)}
          onClearForm={this.handleClearProps.bind(this)}
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.loading,
  selectedUser: state.selectedUser,
  error: state.error,
});

export default connect(mapStateToProps)(Users);
