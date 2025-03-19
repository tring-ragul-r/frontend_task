import React from "react";
import "./NewSignup.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";
import { AppleLogo, FacebookLogo, GoogleLogo } from "../../../utils/Images";
import { CiMail } from "react-icons/ci";

const NewSignup = () => {
  return (
    <div className="signup-new-section">
      <div className="signup-header-container">
        <p className="back-page-navigation">
          <IoIosArrowRoundBack /> back{" "}
        </p>
        <button className="create-account-signup-new">Create an account</button>
      </div>
      <div className="signup-container-inner-body">
        <div className="signup-new-inner-container">
          <div className="signup-logo-container">
            <FaCircle className="signup-logo" />
            <p>Log in</p>
          </div>
          <div className="signup-form-section-outer">
            <section className="input-detials-container">
              <div className="input-details-section">
                <p>Log in</p>
                <form className="form-container-signup-new">
                  <div className="input-section">
                    <label>Email address</label>
                    <input type="email" />
                  </div>
                  <div className="input-section">
                    <label>password</label>
                    <input type="email" />
                  </div>
                  <button className="submit-button-signup-new">Log in</button>
                </form>
              </div>
            </section>
            <p>OR</p>
            <section className="signup-with-socail-media">
              <div className="signup-socialmedia-section">
                <button>
                  <img src={GoogleLogo} alt="" />
                  <span>Continue with Facebook</span>
                </button>
                <button>
                  <img src={FacebookLogo} alt="" />
                  <span>Continue with Facebook</span>
                </button>
                <button>
                  <CiMail />
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </section>
          </div>
          <div className="signup-term-rules-container">
            <div><p className="signup-rules-login">Can’t log in?</p>
            <p>Secure Login with reCAPTCHA subject to Google <span>Terms</span> & <span>Privacy</span></p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSignup;
