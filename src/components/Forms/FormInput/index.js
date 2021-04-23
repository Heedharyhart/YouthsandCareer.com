import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormInput = ({ handleChange, icon, ...otherProps }) => {
  icon = icon ? icon : "";
  return (
      <div className="formRow">
    <div className="input-group">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <FontAwesomeIcon className="icon" icon={icon} />
        </div>
      </div>
      
      

      <input
    
        className="form-control w-75 p-3"
        id="inlineFormInputGroup"
        placeholder="Username"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
    </div>
  );
};

export default FormInput;
