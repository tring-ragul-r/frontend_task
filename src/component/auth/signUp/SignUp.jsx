import React from "react";
import { IoIosClose } from "../../../utils/Icons";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signin-outer-body">
      <div className="signin-overlay">
        <div className="signin-form-outer-container">
          <IoIosClose className="signin-container-close-icon" />
          <div className="signin-form-container">
            <h2 className="signin-title">Create an account</h2>
            <p>
              Already have an ccount? <span>Log in</span>
            </p>
            <div className="radio-button-useprofession">
              <div>
                <input type="radio" />
                <label>For Personal</label>
              </div>
              <div>
                <input type="radio" />
                <label>For business</label>
              </div>
            </div>
            <form className="signup-form-container">
              <div>
                <label className="signin-form-label">Email address</label>
                <input type="email" className="signin-email-input" />
              </div>
              <div>
                <label className="signin-form-label">password</label>
                <input type="email" className="signin-email-input" />
              </div>
              <div>
                <label className="signin-form-label">Phone number</label>
                <input type="email" className="signin-email-input" />
              </div>
              <button className="signin-continue-button">create account</button>
            </form>
            <p className="signup-option-social-media">
              Or, continue with <span>Google </span>or <span>Facebook</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
