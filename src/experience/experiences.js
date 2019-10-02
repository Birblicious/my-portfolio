import React, { Component } from "react";
import "./experiences.css";
import { Waypoint } from "react-waypoint";

class Experiences extends Component {
  render() {
    const addExperienceAnimation = () => {
      var element = document.getElementById("experience-headings");
      element.classList.add("animated");
      element.classList.add("fadeIn");
    };

    const addExperienceBankDetailsAnimation = () => {
      var element = document.getElementById("bank-heading-animation");
      element.classList.add("animated");
      element.classList.add("zoomInDown");

      element = document.getElementById("bank-details-animation");
      element.classList.add("animated");
      element.classList.add("zoomInDown");
    };

    const addExperienceAselsanDetailsAnimation = () => {
      var element = document.getElementById("aselsan-heading-animation");
      element.classList.add("animated");
      element.classList.add("zoomInDown");

      element = document.getElementById("aselsan-details-animation");
      element.classList.add("animated");
      element.classList.add("zoomInDown");
    };
    return (
      <div id="experience">
        <div className="container">
          <div id="experience-headings" className="row delay-1s">
            <Waypoint
              scrollableAncestor={window}
              onEnter={() => {
                addExperienceAnimation();
              }}
              bottomOffset={"1%"}
            ></Waypoint>
            <div className="col-12 experience-entry text-center">
              <p>Experiences</p>
            </div>
            <div className="col-12 experience-details text-center">
              <p>
                Success is not final, failure is not fatal: it is the courage to
                continue that counts.
              </p>
              <hr></hr>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Waypoint
            scrollableAncestor={window}
            onEnter={() => {
              addExperienceBankDetailsAnimation();
            }}
            bottomOffset={"1%"}
          ></Waypoint>
          <div className="row text-sm-center text-lg-right experience-row mx-auto">
            <div
              id="bank-heading-animation"
              className="col-md-4 experience-heading delay-1s"
            >
              <h4>Yapı & Kredi Bank</h4>
              <p>Feb 2018 - Current</p>
            </div>
            <div
              id="bank-details-animation"
              className="col-md-8 experiences-list delay-1s"
            >
              <p className="col-12">
                I am currently working in the CRM department as a back-end
                developer.
              </p>
              <p className="col-12">
                - Achievements: - Took a big part on a project that completely
                changes the infastructure of campaign management. Switching the
                PLSQL / linux shell based batch flow to real-time operations by
                using Apache Kafka. - Developed an in house .Net (N-Tier), ORM
                Oracle and WebAPI based software that enabled Business Unit to
                create credit card campaigns efficently and rapidly. - Worked on
                Harmoni , the banks global platform for serving customers in an
                organized and efficent manner, written in Java and utilizes
                Spring Boot, Hibernate, Bootstrap and more frameworks and
                technologies. - Brought the habit of documentation of the code
                and work the team members accomplished during their tasks, hence
                increasing the efficency by decreasing the amount of confusion
                when tasks swapped among colleagues. - I adapted and learned
                complex business logic in an extremely short amount of time,
                delivered the countless features asked from me which resulted in
                extensive amount of money and time saving for my company.
              </p>
            </div>
          </div>
          <hr></hr>
          <Waypoint
            scrollableAncestor={window}
            onEnter={() => {
              addExperienceAselsanDetailsAnimation();
            }}
            bottomOffset={"1%"}
          ></Waypoint>
          <div className="row text-sm-center text-lg-right experience-row mx-auto">
            <div
              id="aselsan-heading-animation"
              className="col-md-4 experience-heading delay-1s"
            >
              <h4>Aselsan</h4>
              <p>Dec 2016 - Jan 2018</p>
            </div>
            <div
              id="aselsan-details-animation"
              className="col-md-8 experiences-list delay-1s"
            >
              <p className="col-12">
                Right after I graduated I have started to work in Aselsan as
                Software Engineer on Avionics.
              </p>
              <p className="col-12">
                Worked with two hardware components ARINC-426 and MIL-1553-STD
                that enabled avionics to communicate among eachother on HURKUS
                project. I have used .Net framework with utilizing features such
                as interop services, cross compile and wrappers. HÜRKUŞ is a
                plane type manufactured in Turkey and currently used by various
                sectors. Took a part on adding new features on Test Suite,
                developed in .Net that enables testing team to implement test
                scenarios and apply them on real hardware in a really efficent
                manner. The code I implemented is used in HÜRKUŞ, ATAK assault
                helicopter, and GMH. "GMH is a project collabrated with
                SIKORSKY. It's aim is modernizing the Sikorsky's cockpit with
                electronic parts instead of analogue.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
