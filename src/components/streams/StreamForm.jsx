import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const errorClass = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={errorClass}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = formValue => {
    this.props.onSubmit(formValue);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Your Name"
        />
        <Field
          name="discription"
          component={this.renderInput}
          label="Enter Your Discription"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValue => {
  const errors = {};
  if (!formValue.title) {
    errors.title = "You must enter a title";
  }

  if (!formValue.discription) {
    errors.discription = "You must enter a discription";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
