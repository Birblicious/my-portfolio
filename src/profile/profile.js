import React, { Component } from "react";
import "./profile.css";
import { Waypoint } from "react-waypoint";

class Profile extends Component {
  render() {
    const addProfileAnimation = () => {
      var element = document.getElementById("profile-heading");
      element.classList.add("animated");
      element.classList.add("fadeIn");
    };

    const addProfilePictureAnimation = () => {
      var element = document.getElementById("picture-div");
      element.classList.add("animated");
      element.classList.add("fadeInLeft");

      element = document.getElementById("details-animation");
      element.classList.add("animated");
      element.classList.add("fadeInRight");
    };

    return (
      <div id="profile">
        <Waypoint
          scrollableAncestor={window}
          onEnter={() => {
            addProfileAnimation();
          }}
          bottomOffset={"1%"}
        ></Waypoint>
        <div className="container">
          <div className="row">
            <div
              id="profile-heading"
              className="col-12 my-5 text-center delayed-6"
            >
              <p className="profile-entry">Profile</p>
              <p className="profile-details">I am a Fullstack Developer</p>
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
              <Waypoint
                scrollableAncestor={window}
                onEnter={() => {
                  addProfilePictureAnimation();
                }}
                bottomOffset={"-20%"}
              ></Waypoint>
              <div
                id="details-animation"
                className="col-sm-12 col-md-12 col-lg-6 my-5 d-flex text-lg-right delayed-8"
              >
                <div className="row">
                  <div className="col-12 text-center ">
                    <h1 className="about-me-text">About Me</h1>
                  </div>
                  <div className="col-12  text-justify text-lg-right ">
                    <p className="info-text">
                      Hello, I am a 28 years old back-end/front-end developer
                      from Turkey. During my 3 years of experience I have worked
                      on various projects, including on avionics. However, my
                      main focus is mostly working on back-end technologies and
                      create high quality, easy to maintain and unit test driven
                      code. I consider coding as craftmanship and always try to
                      improve myself on clean code principles such as S.O.L.I.D.
                      and design patterns. Always strive for trying out new
                      technologies and learn them by creating a project. This
                      very personal page is a by product of me trying to learn
                      React-Redux and Firebase.
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
