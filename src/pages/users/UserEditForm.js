import React, { Component } from "react";

export class UserEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: props.selectedUser,
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"] || fields["name"] === '') {
      formIsValid = false;
      errors["name"] = "This field is required";
    }

    if (typeof fields["name"] !== "undefined") {
      if (fields["name"] !== '' && !fields["name"].match(/^[a-zA-Z ]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters are allowed";
      }
    }

    //Email
    if (!fields["email"] || fields["email"] === '') {
      formIsValid = false;
      errors["email"] = "This field is required";
    }

    if (fields["email"] !== '' && typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    // Street
    if (!fields["street"] || fields["street"] === '') {
      formIsValid = false;
      errors["street"] = "This field is required";
    }

    // Suite
    if (!fields["suite"] || fields["suite"] === '') {
      formIsValid = false;
      errors["suite"] = "This field is required";
    }

    this.setState({ errors });
    return formIsValid;
  }

  getFields(nextProps){
    if(nextProps.selectedUser) {
      return {
        name: nextProps.selectedUser.name,
        email: nextProps.selectedUser.email,
        street: nextProps.selectedUser.address.street,
        suite: nextProps.selectedUser.address.suite,
      };
    }
    return {
      name: undefined,
      email: undefined,
      street: undefined,
      suite: undefined
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      selectedUser: nextProps.selectedUser,
      fields: this.getFields(nextProps),
      errors: {},
    });
  }

  handler(field, event) {
    let fields = this.state.fields;
    fields[field] = event.target.value;
    this.setState({
      ...this.state,
      fields: fields,
      [event.target.name]: event.target.value,
    });
    this.handleValidation();

  }

  emitClear() {
    this.props.onClearForm();
  }

  emitSubmit(e) {
    e.preventDefault();
    if (!this.handleValidation()) {
      return;
    }

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
            onChange={this.handler.bind(this, "email")}
            defaultValue={
              this.state.selectedUser ? this.state.selectedUser.email : ""
            }
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="e.g john@gmail.com"
          />
          <span className="text-danger">{this.state.errors["email"]}</span>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            ref="nameStringInput"
            onChange={this.handler.bind(this, "name")}
            defaultValue={
              this.state.selectedUser ? this.state.selectedUser.name : ""
            }
            className="form-control"
            id="name"
            placeholder="e.g John Doe"
          />
          <span className="text-danger">{this.state.errors["name"]}</span>
        </div>

        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            ref="streetStringInput"
            onChange={this.handler.bind(this, "street")}
            defaultValue={
              this.state.selectedUser
                ? this.state.selectedUser.address.street
                : ""
            }
            className="form-control"
            id="street"
            placeholder="e.g Hills street"
          />
          <span className="text-danger">{this.state.errors["street"]}</span>
        </div>

        <div className="form-group">
          <label htmlFor="suite">Suite</label>
          <input
            type="text"
            ref="suiteStringInput"
            onChange={this.handler.bind(this, "suite")}
            defaultValue={
              this.state.selectedUser
                ? this.state.selectedUser.address.suite
                : ""
            }
            className="form-control"
            id="suite"
            placeholder="e.g Apt.555"
          />
          <span className="text-danger">{this.state.errors["suite"]}</span>
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
