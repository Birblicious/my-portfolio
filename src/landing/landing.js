import React, { Component } from "react";
import "./landing.css";

//font-awesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
library.add(fab);

class Landing extends Component {
  render() {
    return (
      <div className="landingpage">
        <div className="container text-center">
          <div className="row"></div>
          <div className="row landingtext">
            <div className="col-12 animated fadeInDown delay-1s landingpage-profile mx-auto my-5"></div>
            <div className="col-12 animated bounceInUp delayed-6">
              <p>Arda Burak EKMEKÇİ</p>
            </div>
            <div className="col-12 animated bounceInUp delayed-8">
              <p>Software Engineer</p>
            </div>
            <div className="col-12 animated bounceInUp delay-1s">
              <a className="btn btn-outline-light btn-lg" href="#profile">
                Welcome
                <FontAwesomeIcon className="mx-3" icon={faMugHot} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
