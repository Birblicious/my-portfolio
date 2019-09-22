import React, { Component } from "react";
import "./profile.css";
import { Waypoint } from "react-waypoint";

class Profile extends Component {
  render() {
    const addAnimation = () => {
      var element = document.getElementById("profile-heading");
      element.classList.add("animated");
      element.classList.add("fadeIn");

      element = document.getElementById("picture-div");
      element.classList.add("animated");
      element.classList.add("fadeInLeft");

      element = document.getElementById("picture-div");
      element.classList.add("animated");
      element.classList.add("fadeInLeft");

      element = document.getElementById("details-animation");
      element.classList.add("animated");
      element.classList.add("fadeInRight");
    };

    const removeAnimation = () => {
      var element = document.getElementById("profile-heading");
      element.classList.remove("animated");
      element.classList.remove("fadeIn");

      element = document.getElementById("picture-div");
      element.classList.remove("animated");
      element.classList.remove("fadeInLeft");

      element = document.getElementById("picture-div");
      element.classList.remove("animated");
      element.classList.remove("fadeInLeft");

      element = document.getElementById("details-animation");
      element.classList.remove("animated");
      element.classList.remove("fadeInRight");
    };

    return (
      <div id="profile" className="offset">
        <Waypoint
          scrollableAncestor={window}
          onEnter={() => {
            addAnimation();
          }}
          bottomOffset={"10%"}
        ></Waypoint>
        <div className="container">
          <div className="row">
            <div
              id="profile-heading"
              className="col-12 my-5 text-center delayed-6"
            >
              <p className="profile-entry">Profile</p>
              <p className="profile-details">I am a Fullstack Developer :)</p>
              <hr className="line-options"></hr>
            </div>
          </div>
          <div className="profile-space">
            <div className="row">
              <div
                id="picture-div"
                className="col-sm-12 test col-md-12 col-lg-6 my-5 mx-auto d-flex delayed-8"
              >
                <div className="row mx-auto">
                  <div className="col-12 picture-container">
                    <div className="profile-picture"></div>
                  </div>
                </div>
              </div>

              <div
                id="details-animation"
                className="col-sm-12 col-md-12 col-lg-6 my-5 d-flex text-lg-right delayed-8"
              >
                <div className="row">
                  <div className="col-12 text-center ">
                    <h1 className="about-me-text">About me</h1>
                  </div>
                  <div className="col-12  text-justify text-lg-right ">
                    <p className="info-text">
                      Hello, I am a 28 old developer with back-end and front-end
                      experience. I have experience on EDA and SOA using .Net
                      and Springboot frameworks. I like to implement solutions
                      for real world problems and learn exciting things along
                      the way. I think software developing as a craftmanship and
                      stand for the code quality and testing, practicing and
                      improving myself on the S.O.L.I.D. principles on every
                      project I work on. I love to work in a team and see the
                      product and team getting mature together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
