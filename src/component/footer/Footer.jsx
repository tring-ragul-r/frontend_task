import React from "react";
import "./Footer.css";
import { FooterImg } from "../../utils/Images";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  CiLocationOn,
  FaPhoneAlt,
  IoMail,
} from "../../utils/Icons";
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-section-container">
        <div>
          <img src={FooterImg} alt="" />
        </div>
        <div className="footer-info-section">
          <header className="footer-header-title">Information</header>
          <p>Main</p>
          <p>Gallery</p>
          <p>Projects</p>
          <p>Certifications</p>
          <p>Contacts</p>
        </div>
        <div className="footer-contacts-section">
        <header className="footer-header-title"> Contacts </header>
          <p>
            <CiLocationOn />
            <span>1234 Sample Street Austin Texas 78704</span>
          </p>
          <p>
            <FaPhoneAlt /> <span>512.333.2222</span>
          </p>
          <p>
            <IoMail />
            <span>sampleemail@gmail.com</span>
          </p>
        </div>
        <div>
        <header className="footer-header-title"> Social Media </header>
          <div className="footer-socialmedia-section">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaPinterestP />
          </div>
        </div>
      </div>
      <p className="copyright-section">© 2021 All Rights Reserved</p>
    </section>
  );
};

export default Footer;
