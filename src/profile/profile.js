import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div id="profile">
        <div className="container">
          <div className="row">
            <div className="col-12 my-5 text-center  animated fadeIn delayed-6">
              <p className="profile-entry">Profile</p>
              <p className="profile-details">I am a Fullstack Developer :)</p>
              <hr className="line-options"></hr>
            </div>
          </div>
          <div className="profile-space">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-6 my-5 mx-auto d-flex animated fadeInLeft delayed-8">
                <div className="row mx-auto">
                  <div className="col-12">
                    <div className="profile-picture"></div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-6 my-5 d-flex text-lg-right animated fadeInRight delayed-8">
                <div className="row">
                  <div className="col-12 text-center ">
                    <h1 className="about-me-text">About me</h1>
                  </div>
                  <div className="col-12 info-text text-sm-center text-lg-right ">
                    <p>
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
