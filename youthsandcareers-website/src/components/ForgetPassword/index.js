import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import Buttons from "./../Forms/Button";
import FormInput from "./../Forms/FormInput";

const initialState = {
  Email: "",
  errors: [],
};

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
  };
  render() {
    const { Email } = this.state;
    return (
      <div className="reset">
        <div className="wrap">
          <h2>FORGOT YOUR PASSWORD</h2>
          <i className="material-icons">lock_outline</i>
          <h4>
            Fill in the email used in registering so as to receive a link to
            reset password
          </h4>

          <div className="form-group">
            <FormInput
              type="email"
              name="Email"
              value={Email}
              icon={faEnvelope}
              placeholder="Enter your Email"
              onChange={this.handleChange}
              required
            />
          </div>
        </div>
        <Buttons  type="submit">RESET</Buttons>
      </div>
    );
  }
}

export default ForgetPassword;
