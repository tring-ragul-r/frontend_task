import React from "react";
import {
  HeaderLogo,
  AboutImg_1,
  AboutImg_2,
  AboutImg_3,
  Project_1,
  Project_2,
  Project_3,
  Project_4,
  Project_5,
  ContactCoverImg,
} from "../../utils/Images";
import "./Home.css";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
} from "../../utils/Icons.jsx";
import Footer from "../footer/Footer.jsx";

const Home = () => {
  return (
    <div>
        
      <div className="homepage-container">
        <div className="header-container">
          <div className="headerlogo-container">
            <img src={HeaderLogo} alt="headerlogo" className="header-logo" />
          </div>
          <nav className="navbar-container">
            <p className="navbar-main">MAIN</p>
            <p>GALLERY</p>
            <p>PROJECTS</p>
            <p>CERTIFICATIONS</p>
            <p>CONTACTS</p>
          </nav>
        </div>
        <div className="home-page1-body">
          <div className="home-page1-container1">
            <div>
              <p className="home-page-container1-title">PROJECT</p>
              <p className="home-page-container1-subtitle">Lorum</p>
            </div>
            <div>
              <IoIosArrowRoundBack className="home-page-arrow home-page-arrow-back" />
              <IoIosArrowRoundForward className="home-page-arrow home-page-arrow-forward" />
            </div>
            <div className="home-page1-slide-number">01 / 02</div>
          </div>
          <div className="home-page1-container2">
            <button className="home-page-view-project-button">
              VIEW PROJECT <IoIosArrowRoundForward className="forward-arrow-icon"/>
            </button>
          </div>
        </div>
        <section className="home-about-section-container">
          <section className="home-about-image-section">
            <div className="home-about-image-container1">
              <img src={AboutImg_1} alt="" />
              <img src={AboutImg_2} alt="" />
            </div>
            <div className="home-about-image-container2">
              <img src={AboutImg_3} alt="" />
            </div>
          </section>
          <section className="home-about-content-section">
            <h2 className="home-about-title">About</h2>
            <p className="home-about-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="about-readmore-button">
              READ MORE <IoIosArrowRoundForward className="forward-arrow-icon"/>
            </button>
          </section>
        </section>
        <section className="mission-section">
          <h1 className="mission-section-title">
            Main Focus/Mission Statement
          </h1>
          <div className="mission-section-content-container">
            <div className="mission-section-content-container1">
              <p className="mission-content-number">1</p>
              <p className="mission-content-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div className="mission-section-content-container2">
              <p className="mission-content-number">2</p>
              <p className="mission-content-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat, magna mauris porttitor
                tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
        </section>
        <section className="projects-container">
          <h1 className="project-title">Our Projects</h1>
          <div className="projects-section">
            <div className="projects-section-image-row1">
              <div className="projects-section-row1-image1"></div>
              <img
                src={Project_2}
                alt=""
                className="projects-section-row1-image2"
              />
              <div className="projects-bg-content">
                <p className="projects-bg-content-title">
                  Sample <br />
                  Project
                </p>
                <button>
                  VIEW MORE <IoIosArrowRoundForward className="forward-arrow-icon"/>
                </button>
              </div>
            </div>
            <div className="projects-section-image-row2">
              <img src={Project_3} alt="" />
              <img src={Project_4} alt="" />
              <img src={Project_5} alt="" />
            </div>
          </div>
          <button className="project-section-allprojects-button">
            ALL PROJECTS <IoIosArrowRoundForward className="forward-arrow-icon"/>
          </button>
        </section>
        <section className="contact-section">
          <h1 className="contact-section-title">Contact Us</h1>
          <div className="contact-section-container">
            <form className="contact-form-container">
              <input type="text" placeholder="Name" />
              <input
                type="text"
                placeholder="Phone Number"
                className="important-field"
              />
              <input
                type="text"
                placeholder="Email"
                className="important-field"
              />
              <input type="text" placeholder="Interested In" />
              <textarea
                placeholder="Message"
                className="important-field"
              ></textarea>
            </form>
            <img
              src={ContactCoverImg}
              alt=""
              className="contact-section-image"
            />
          </div>
          <button className="contact-send-email-button">
            SEND EMAIL <IoIosArrowRoundForward className="forward-arrow-icon"/>
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
