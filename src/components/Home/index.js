import { Component } from "react";
import Header from "../Header";
import { IoCheckmarkCircle } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bg-container">
          <div className="profile-card">
            <div className="profile-content-container">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713592615/Ellipse_727_riwaxs.png"
                alt="profile"
                className="profile-image"
              />
              <div className="all-over-details">
                <div className="details-content">
                  <div className="name-content">
                    <p className="doctor-name">Dr: Bruce Willis</p>
                    <IoCheckmarkCircle className="tick-icon" />
                  </div>
                  <p className="gynecologist">Gynecologist</p>
                  <div className="rating-content">
                    <p className="rating">4.2</p>
                    <img
                      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                      alt="start"
                      className="star-icon"
                    />
                    <img
                      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                      alt="start"
                      className="star-icon"
                    />
                    <img
                      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                      alt="start"
                      className="star-icon"
                    />
                  </div>
                </div>
                <div className="followers-content">
                  <p className="followers">Followers</p>
                  <p className="count">850</p>
                </div>
                <div className="following-content">
                  <p className="followers">Following</p>
                  <p className="count">18k</p>
                </div>
                <div className="posts-content">
                  <p className="followers">Posts</p>
                  <p className="count">850</p>
                </div>
                <button className="appointment" type="button">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="sp">
            <div className="about-me-container">
              <div className="about-me-content">
                <h1 className="about-me">A Little About me</h1>
                <button className="follow-button" type="button">
                  Follow <AiOutlinePlus className="plus-icon" />
                </button>
              </div>
              <p className="about-me-description">
                Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
                Surat. love to work with all my hospital staff and seniour
                doctors. Completed my graduation in Gynaecologist Medicine from
                the{" "}
              </p>
              <hr Read More className="hr" />
              <div className="languages-spoken">
                <p className="languages">Languages Spoken</p>
                <button className="languages-button" type="button">
                  English
                </button>
                <button className="languages-button" type="button">
                  Hindi
                </button>
                <button className="languages-button" type="button">
                  Telugu
                </button>
              </div>
              <div className="social-media-app">
                <FiFacebook className="app" />
                <FaInstagram className="app" />
                <PiYoutubeLogo className="app" />
                <CiTwitter className="app" />
              </div> 


<div className="specialization-container">
    <h1>shiva paravathi</h1>
</div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
