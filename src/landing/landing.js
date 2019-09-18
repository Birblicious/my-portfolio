import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landingpage">
        <div className="container text-center">
          <div className="row landingtext">
            <div className="col-12 animated bounceInUp delayed-6">
              <h1>Arda Burak EKMEKÇİ</h1>
            </div>
            <div className="col-12 animated bounceInUp delayed-8">
              <h1>Software Engineer</h1>
            </div>
            <div className="col-12 animated bounceInUp delay-1s">
              <h1>More Info ☺</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
