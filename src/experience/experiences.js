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
      element.classList.add("rubberBand");

      element = document.getElementById("bank-details-animation");
      element.classList.add("animated");
      element.classList.add("zoomInDown");
    };

    const addExperienceAselsanDetailsAnimation = () => {
      var element = document.getElementById("aselsan-heading-animation");
      element.classList.add("animated");
      element.classList.add("rubberBand");

      element = document.getElementById("aselsan-details-animation");
      element.classList.add("animated");
      element.classList.add("zoomInDown");
    };

    const addExperienceAselsanInternDetailsAnimation = () => {
      var element = document.getElementById("aselsan-intern-heading-animation");
      element.classList.add("animated");
      element.classList.add("rubberBand");

      element = document.getElementById("aselsan-intern-details-animation");
      element.classList.add("animated");
      element.classList.add("zoomInDown");
    };

    const addExperienceTAIInternDetailsAnimation = () => {
      var element = document.getElementById("tai-intern-heading-animation");
      element.classList.add("animated");
      element.classList.add("rubberBand");

      element = document.getElementById("tai-intern-details-animation");
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
                <a href="https://en.wikipedia.org/wiki/Yap%C4%B1_ve_Kredi_Bankas%C4%B1">
                  Yapı & Kredi Bank
                </a>
                &nbsp; is the second biggest private bank in Turkey with more
                than 25 million active customers domestically. I am currently
                working in the CRM department as a back-end developer.
              </p>
              <p className="col-12">
                Technologies: .Net/C# J2EE/SpringBoot/Java ELK OracleDB PL/SQL
                Informatica
              </p>
              <p className="col-12">
                Achievements: Quickly adapted to the work environment and to my
                colleagues. Overhauled a broad project (.Net/C# - OracleDB -
                Stored Procedures - Microservices - Web API) single handedly
                within 3 months of my joining to the team. Took a big part on a
                project that completely changes the infastructure of campaign
                management by switching the old PLSQL / linux shell based batch
                flow to real-time operations by using Apache Kafka, Spring Boot
                Framework, ELK Stack, Oracle DB. Brought the habit of
                documentation of the code and work the team members accomplished
                during their tasks, hence increasing the efficency by decreasing
                the amount of confusion when tasks swapped among colleagues. I
                adapted and learned complex business logic in an extremely short
                amount of time, delivered the countless features asked from me
                which resulted in extensive amount of money and time saving for
                my company.
              </p>
            </div>
          </div>
          <hr></hr>
          <Waypoint
            scrollableAncestor={window}
            onEnter={() => {
              addExperienceAselsanDetailsAnimation();
            }}
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
                <a href="https://www.aselsan.com.tr/en">Aselsan</a> &nbsp; is
                the biggest defense industry in Turkey and 52nd in the World.
                Right after I graduated from Bilkent University I have started
                to work in Aselsan as Software Engineer on Avionics.
              </p>
              <p className="col-12">
                Technologies: C++ .Net/C# Excalibur ARINC-429 Excalibur
                ARINC-708 Excalibur MIL-STD-1553 Abaco ARINC-429
              </p>
              <p className="col-12">
                I have mostly worked with two hardware components Excalibur
                ARINC-429 and MIL-1553-STD that enabled avionics to communicate
                among eachother on HURKUS project. I have used .Net framework
                with utilizing namespaces such as System.Runtime.InteropServices
                for COM. HÜRKUŞ is a plane type manufactured in Turkey and
                currently used by various sectors. Took a part on adding new
                features on Test Suite, developed in .Net that enables testing
                team to implement test scenarios and apply them on real hardware
                in a really efficent manner. The code I implemented is used in{" "}
                <a href="https://en.wikipedia.org/wiki/TAI_H%C3%BCrku%C5%9F">
                  HÜRKUŞ
                </a>
                ,{" "}
                <a href="https://en.wikipedia.org/wiki/TAI/AgustaWestland_T129_ATAK">
                  ATAK
                </a>{" "}
                assault helicopter, and GMH. "GMH is a project collabrated with{" "}
                <a href="https://en.wikipedia.org/wiki/Sikorsky_Aircraft">
                  SIKORSKY
                </a>
                . It's aim is modernizing the Sikorsky's cockpit with electronic
                parts instead of analogue.
              </p>
            </div>
          </div>
          <hr></hr>
          <Waypoint
            scrollableAncestor={window}
            onEnter={() => {
              addExperienceAselsanInternDetailsAnimation();
            }}
          ></Waypoint>
          <div className="row text-sm-center text-lg-right experience-row mx-auto">
            <div
              id="aselsan-intern-heading-animation"
              className="col-md-4 experience-heading delay-1s"
            >
              <h4>Aselsan - Intern</h4>
              <p>July 2015 - Sep 2015</p>
            </div>
            <div
              id="aselsan-intern-details-animation"
              className="col-md-8 experiences-list delay-1s"
            >
              <p className="col-12">
                Aselsan is the biggest defense industry in Turkey and 52nd in
                the World. I have completed my internship in Aselsan during the
                summer of 2015.
              </p>
              <p className="col-12">Technologies: .Net/C# MySQL</p>
              <p className="col-12">
                Utilized C# and MySQL to develop a software based on{" "}
                <a href="https://en.wikipedia.org/wiki/Analytic_hierarchy_process">
                  Analytical Hierarchy Process Algorithm
                </a>{" "}
                that selects a sub-contractor company with the inputs of users,
                mostly Aselsan managers, from a pool of subcontractor compaines
                for assigning a project that ASELSAN needs to get done. On a
                certain project one manager's decision can be more impactful
                compared to others, and similarly on a certain project a
                criterion can be more important than the other criteria. Using
                the Analytical Hierarchy Process all of the inputs are
                calculated and the most suitable company is picked.
              </p>
            </div>
          </div>
          <hr></hr>
          <Waypoint
            scrollableAncestor={window}
            onEnter={() => {
              addExperienceTAIInternDetailsAnimation();
            }}
          ></Waypoint>
          <div className="row text-sm-center text-lg-right experience-row mx-auto">
            <div
              id="tai-intern-heading-animation"
              className="col-md-4 experience-heading delay-1s"
            >
              <h4>Turkish Aerospace Industries - Intern</h4>
              <p>July 2014 - Sep 2014</p>
            </div>
            <div
              id="tai-intern-details-animation"
              className="col-md-8 experiences-list delay-1s"
            >
              <p className="col-12">
                <a href="https://www.tusas.com.tr/en/corporate/about-us">
                  Turkish Aerospace Industries
                </a>
                &nbsp; is the second biggest defense industry in Turkey and 64th
                in the World. I have completed my internship in TAI during the
                summer of 2014.
              </p>
              <p className="col-12">Technologies: J2EE/Java Oracle DB</p>
              <p className="col-12">
                A Java based widget that aims helping the programmers in TAI via
                dragging and dropping the widget with utilizing window builder.
                The widget I created is used frequently in most of the projects
                by inserting the widget to the user interface with drag and drop
                fashion without requiring a single line of code and saving
                valuable of developers time. The widgets main function is
                adding/deleting/viewing items from the company's database
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
