import React, { Component } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import FormInput from "./../Forms/FormInput";
import Buttons from "./../Forms/Button";
import axios from "axios";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  FullName: "",
  UserName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
  errors: [],
};

class Signup extends Component {
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

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { FullName, UserName, Email, Password, ConfirmPassword } = this.state;
    if (Password !== ConfirmPassword) {
      const err = ["password Don't match"];
      this.setState({
        errors: err,
      });
      return;
    }

    const url = "https://sh6-userdb.herokuapp.com/createuser.php";

    const user = {
      fullname: FullName,
      username: UserName,
      email: Email,
      password: Password,
    };

    axios(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      data: JSON.stringify(user),
    })
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  render() {
    const {
      FullName,
      UserName,
      Email,
      Password,
      ConfirmPassword,
      errors,
    } = this.state;

    return (
      <div className="signup">
        <div className="wrap">
          <div className="link">
            <Link className="sign" to="/signup">
              Sign Up
            </Link>
            <Link className="login" to="/login">
              Log In
            </Link>
          </div>
          <h3>Get Started</h3>
          {errors.length > 0 && (
            <ul>
              {errors.map((err, index) => {
                return (
                  <li key={index} style={{ listStyle: "none", color: "red" }}>
                    {err}
                  </li>
                );
              })}
            </ul>
          )}

          <div className="formWrap">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <FormInput
                  type="text"
                  name="FullName"
                  value={FullName}
                  icon={faUser}
                  placeholder="Enter your Fullname"
                  onChange={this.handleChange}
                  required
                />
                {/* <i class="material-icons">person</i> */}
              </div>

              <div className="form-group">
                <FormInput
                  type="text"
                  name="UserName"
                  value={UserName}
                  icon={faUser}
                  placeholder="Enter your Username"
                  onChange={this.handleChange}
                  required
                />
              </div>

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

              <div className="form-group">
                <FormInput
                  type="password"
                  name="Password"
                  value={Password}
                  icon={faLock}
                  placeholder="Enter your Password"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <FormInput
                  type="password"
                  name="ConfirmPassword"
                  value={ConfirmPassword}
                  icon={faLock}
                  placeholder="Confirm your Password"
                  onChange={this.handleChange}
                />
              </div>
              <Buttons type="submit">Sign up</Buttons>
              <div className="form-p">
                Already have an account?
                <Link className="log" to="/login">
                  Log In
                </Link>
              </div>
              <div className="or">OR</div>

              <footer>
                <p className="foot">Continue With</p>
                <span className="social-g">
                  <a href="#" className="icon">
                    <img
                      className="img"
                      src="https://img.icons8.com/cute-clipart/64/000000/google-logo.png"
                      width="35"
                      height="35"
                    />
                  </a>
                  <a href="#" className="icon">
                    <img
                      className="img1"
                      src="https://img.icons8.com/cute-clipart/64/000000/facebook.png"
                      width="35"
                      height="35"
                    />
                  </a>
                </span>
              </footer>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
