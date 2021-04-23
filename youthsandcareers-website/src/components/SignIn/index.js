import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./signin.css";
import Buttons from "./../Forms/Button";
import FormInput from "./../Forms/FormInput";


function SignIn (props) {
  const [loading, setLoading] = useState(false);
  const Email = useFormInput('');
  const Password = useFormInput('');
  const [error, setError] = useState(null);
    // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('https://sh6-userdb.herokuapp.com/readuser.php', { email: Email.value, password: Password.value }).then(response => {
      setLoading(false);
      //setUserSession(response.data.token, response.data.user);
      //props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
    return (
      <div className="signin">
        <div className="wrap">
          <div className="link">
            <Link className="sign" to="/signup">
              Sign Up
            </Link>
            <Link className="login" to="/login">
              Log In
            </Link>
          </div>
          <h3>Welcome Back!</h3>
        </div>
        <div className="form-group">
                <FormInput
                  type="email"
                  name="Email"
                  value={Email}
                  icon={faEnvelope}
                  placeholder="Enter your Email"
                  {...Email}
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
                  {...Password}
                />
              </div>

             
              <div className="form-group">
                <div className="form-check">
                   <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                   <label className="form-check-label" for="invalidCheck2">
                      Remember Me
                  </label>
                  </div>
                  <Link className="forget" to="/forgetPassword">
                Forget Password?
              </Link>
                 </div>
              
        
        
                <Buttons type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>Login</Buttons>
            
              <div className="form-p">
                Don't have an account yet?{" "}
                <Link className="log" to="/signup">
                  Sign up Now
                </Link>
              </div>
            </div>
    
          
    
      
    );
  }

  const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}


export default SignIn;
