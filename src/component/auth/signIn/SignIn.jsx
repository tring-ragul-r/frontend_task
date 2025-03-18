import React from "react";
import { FaPhoneAlt, IoIosClose } from "../../../utils/Icons";
import { FacebookLogo,GoogleLogo,AppleLogo } from "../../../utils/Images";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-outer-body">
      <div className="signin-overlay">
        <div className="signin-form-outer-container">
          <IoIosClose className="signin-container-close-icon" />
          <div className="signin-form-container">
            <h2 className="signin-title">Log in or sign up</h2>
            <form>
              <div>
                <label className="signin-form-label">Email</label>
                <input type="email" className="signin-email-input" />
              </div>
              <button className="signin-continue-button">Continue</button>
            </form>
            <p className="signin-option-or">OR</p>
            <div className="social-media-login-option">
              <button><img src={FacebookLogo} alt="" /><span>Continue with Facebook</span></button>
              <button><img src={GoogleLogo} alt="" /><span>Continue with Facebook</span></button>
              <button><img src={AppleLogo} alt="" /><span>Continue with Facebook</span></button>
              <button><FaPhoneAlt/><span>Continue with Facebook</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
