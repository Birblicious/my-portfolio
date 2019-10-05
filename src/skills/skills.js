import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
import "./skills.css";

class Skills extends Component {
  render() {
    const AddProgressbarAnimation = (divID, animation) => {
      var element = document.getElementById(divID);
      element.classList.add("animated");
      element.classList.add(animation);
    };

    const CreateProgressBar = props => {
      var barRankFill = "";
      var barClasses = "";

      switch (props.barRank) {
        case "Strong":
          barRankFill = { width: "100%" };
          barClasses = "progress-bar progress-bar-striped bg-info";
          break;
        case "Experienced":
          barRankFill = { width: "75%" };
          barClasses = "progress-bar progress-bar-striped bg-success";
          break;
        case "Familiar":
          barRankFill = { width: "50%" };
          barClasses = "progress-bar progress-bar-striped bg-primary";
          break;
        default:
          barRankFill = { width: "25%" };
          barClasses = "progress-bar progress-bar-striped bg-warning";
          break;
      }

      return (
        <React.Fragment>
          <div className="col-sm-4 col-md-1 ">
            <p className="text-center">{props.barTitle}</p>
          </div>
          <div className="col-sm-8 col-md-5">
            <div className="progress  progressbar-height">
              <div
                className={barClasses}
                role="progressbar"
                style={barRankFill}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {props.barRank}
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    };
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
          <div id="backend">
            <Waypoint
              scrollableAncestor={window}
              onEnter={() => {
                AddProgressbarAnimation("backend", "slideInLeft");
              }}
              bottomOffset={"1%"}
            ></Waypoint>
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
              <CreateProgressBar barTitle={".Net MVC-5"} barRank={"Strong"} />
              <CreateProgressBar
                barTitle={".Net Core 2.2"}
                barRank={"Strong"}
              />
            </div>
            {/* PROGRESS-BAR ROW START*/}
            <div className="row padding-progressbar">
              <CreateProgressBar barTitle={"C#"} barRank={"Strong"} />
              <CreateProgressBar barTitle={"J2EE"} barRank={"Experienced"} />
            </div>
            {/* PROGRESS-BAR ROW START*/}
            <div className="row padding-progressbar">
              <CreateProgressBar
                barTitle={"Spring Boot"}
                barRank={"Experienced"}
              />
              <CreateProgressBar barTitle={"Java"} barRank={"Experienced"} />
            </div>
            {/* PROGRESS-BAR ROW START*/}
            <div className="row  padding-progressbar">
              <CreateProgressBar barTitle={"XUnit"} barRank={"Experienced"} />
              <CreateProgressBar barTitle={"PHP"} barRank={"Familiar"} />
            </div>
            {/* PROGRESS-BAR ROW END BACK-END */}
          </div>

          {/* PROGRESS-BAR START FRONT-END*/}
          <div id="frontend">
            <Waypoint
              scrollableAncestor={window}
              onEnter={() => {
                AddProgressbarAnimation("frontend", "slideInRight");
              }}
              bottomOffset={"1%"}
            ></Waypoint>
            <div className="row"></div>
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
              <CreateProgressBar barTitle={"HTML-5"} barRank={"Strong"} />
              <CreateProgressBar barTitle={"CSS-3"} barRank={"Strong"} />
            </div>
            {/* PROGRESS-BAR ROW START*/}
            <div className="row padding-progressbar">
              <CreateProgressBar barTitle={"Bootstrap"} barRank={"Strong"} />
              <CreateProgressBar
                barTitle={"React-Redux"}
                barRank={"Experienced"}
              />
            </div>
            {/* PROGRESS-BAR ROW START*/}
            <div className="row padding-progressbar">
              <CreateProgressBar barTitle={"JavaScript"} barRank={"Familiar"} />
              <CreateProgressBar barTitle={"JQuery"} barRank={"Familiar"} />
            </div>
          </div>

          {/* PROGRESS-BAR START DATABASE*/}
          <div id="database">
            <Waypoint
              scrollableAncestor={window}
              onEnter={() => {
                AddProgressbarAnimation("database", "slideInLeft");
              }}
              bottomOffset={"1%"}
            ></Waypoint>
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
              <CreateProgressBar barTitle={"ORACLE DB"} barRank={"Strong"} />
              <CreateProgressBar barTitle={"MYSQL"} barRank={"Strong"} />
            </div>
            <div className="row padding-progressbar">
              <CreateProgressBar barTitle={"PL/SQL"} barRank={"Strong"} />
              <CreateProgressBar barTitle={"PostgreSQL"} barRank={"Familiar"} />
            </div>
          </div>

          {/* PROGRESS-BAR START PLATFORMS & TOOLS*/}
          <div id="platforms">
            <Waypoint
              scrollableAncestor={window}
              onEnter={() => {
                AddProgressbarAnimation("platforms", "slideInRight");
              }}
              bottomOffset={"1%"}
            ></Waypoint>
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
              <CreateProgressBar
                barTitle={"Microsoft Azure"}
                barRank={"Experienced"}
              />
              <CreateProgressBar
                barTitle={"Apache Kafka"}
                barRank={"Experienced"}
              />
            </div>
            {/* PROGRESS-BAR ROW START*/}
            <div className="row padding-progressbar">
              <CreateProgressBar
                barTitle={"Informatica"}
                barRank={"Experienced"}
              />
              <CreateProgressBar
                barTitle={"Elastic Search"}
                barRank={"Experienced"}
              />
            </div>
            {/* PROGRESS-BAR ROW START*/}
            <div className="row padding-progressbar">
              <CreateProgressBar barTitle={"Kibana"} barRank={"Experienced"} />
              <CreateProgressBar barTitle={"Logstash"} barRank={"Familiar"} />
            </div>
            {/* PROGRESS-BAR ROW START*/}
            <div className="row padding-progressbar">
              <CreateProgressBar
                barTitle={"Apache Spark"}
                barRank={"Familiar"}
              />
              <CreateProgressBar barTitle={"Docker"} barRank={"Familiar"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
