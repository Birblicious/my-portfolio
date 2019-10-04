import React, { Component } from "react";

import "./skills.css";

class Skills extends Component {
  render() {
    return (
      <div id="skills" className="background">
        <div className="container padding-1">
          <div className="row text-center">
            <div className="col-12 ">
              <p className="skills-entry">SKILLS</p>
            </div>
            <div className="col-12">
              <p className="skills-details">
                Tell me and I forget. Teach me and I remember. Involve me and I
                learn.
              </p>
            </div>
          </div>
        </div>
        <hr className="skills-line"></hr>
        <div className="container-fluid  progressbar-text">
          <div className="row">
            <div className="col-12">
              <p className="text-center padding-2 skills-headline">
                BACKEND TECHNOLOGIES
              </p>
            </div>
          </div>
          <hr className="skills-line-short"></hr>
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-1 padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">.Net MVC-5</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Strong
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">.Net Core 2.2</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Strong
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">C#</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Strong
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">J2EE</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Experienced
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">Spring Boot</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Experienced
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">Java</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Experienced
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          {/* PROGRESS-BAR ROW START*/}
          <div className="row  padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">XUnit</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Familiar
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">PHP</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-primary"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Familiar
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1"></div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END BACK-END */}
          {/* PROGRESS-BAR START FRONT-END*/}
          <div className="row">
            <div className="col-12">
              <p className="text-center padding-2 skills-headline">
                FRONTEND TECHNOLOGIES
              </p>
            </div>
          </div>
          <hr className="skills-line-short"></hr>
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-1 padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">HTML-5</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Strong
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">CSS-3</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Strong
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">Bootstrap</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Strong
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">React-Redux</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Experienced
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">JavaScript</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-primary"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Familiar
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <div className="col-sm-4 col-md-1 ">
                <p className="text-center">JQuery</p>
              </div>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-primary"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Familiar
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          <div className="row">
            <div className="col-12">
              <p className="text-center padding-2 skills-headline">
                DATABASE TECHNOLOGIES
              </p>
            </div>
          </div>
          <hr className="skills-line-short"></hr>
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-1 padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">ORACLE DB</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Strong
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">MYSQL</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Strong
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">PL/SQL</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Strong
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">PostgreSQL</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-primary"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Familiar
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          <div className="row">
            <div className="col-12">
              <p className="text-center padding-2 skills-headline">
                PLATFORMS & TOOLS
              </p>
            </div>
          </div>
          <hr className="skills-line-short"></hr>
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-1 padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">Microsoft Azure</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Experienced
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">Apache Kafka</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Experienced
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">Informatica</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Experienced
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">Logstash</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Familiar
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">Elastic Search</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Experienced
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">Kibana</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Familiar
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
          {/* PROGRESS-BAR ROW START*/}
          <div className="row padding-progressbar">
            {/* PROGRESS-BAR START */}
            <div className="col-sm-4 col-md-1 ">
              <p className="text-center">Apache Spark</p>
            </div>
            <div className="col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-primary"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Experienced
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
            {/* PROGRESS-BAR START */}
            <div className="col-xs-4 col-sm-4 col-md-1">
              <p className="text-center">Docker</p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-5">
              <div className="progress  progressbar-height">
                <div
                  className="progress-bar progress-bar-striped bg-primary"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Familiar
                </div>
              </div>
            </div>
            {/* PROGRESS-BAR END */}
          </div>
          {/* PROGRESS-BAR ROW END */}
        </div>
      </div>
    );
  }
}

export default Skills;
