import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../common/StreamForm";

class StreamCreate extends Component {
  onSubmit = formValue => {
    this.props.createStream(formValue);
  };

  render() {
    return (
      <div>
        <h3>Create A Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
