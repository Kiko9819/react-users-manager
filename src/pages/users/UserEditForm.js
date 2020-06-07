import React, { Component } from "react";

export class UserEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: props.selectedUser,
    };

    this.handler = this.handler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      selectedUser: nextProps.selectedUser,
    });
  }

  handler(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  emitClear() {
    this.props.onClearForm();
  }

  emitSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit({
      id: this.props.selectedUser ? this.props.selectedUser.id : undefined,
      email: this.refs.emailStringInput.value,
      name: this.refs.nameStringInput.value,
      address: {
        street: this.refs.streetStringInput.value,
        suite: this.refs.suiteStringInput.value,
      },
    });
  }

  render() {
    return (
      <form
        className="my-5 col-lg-6 mx-auto d-flex flex-column"
        key={this.state.selectedUser ? this.state.selectedUser : null}
      >
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            ref="emailStringInput"
            onChange={this.handler}
            defaultValue={
              this.state.selectedUser ? this.state.selectedUser.email : ""
            }
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="e.g john@gmail.com"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            ref="nameStringInput"
            onChange={this.handler}
            defaultValue={
              this.state.selectedUser ? this.state.selectedUser.name : ""
            }
            className="form-control"
            id="name"
            placeholder="e.g John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            ref="streetStringInput"
            onChange={this.handler}
            defaultValue={
              this.state.selectedUser
                ? this.state.selectedUser.address.street
                : ""
            }
            className="form-control"
            id="street"
            placeholder="e.g Hills street"
          />
        </div>

        <div className="form-group">
          <label htmlFor="suite">Suite</label>
          <input
            type="text"
            ref="suiteStringInput"
            onChange={this.handler}
            defaultValue={
              this.state.selectedUser
                ? this.state.selectedUser.address.suite
                : ""
            }
            className="form-control"
            id="suite"
            placeholder="e.g Apt.555"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-1"
          onClick={this.emitSubmit.bind(this)}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.emitClear.bind(this)}
        >
          Clear
        </button>
      </form>
    );
  }
}
