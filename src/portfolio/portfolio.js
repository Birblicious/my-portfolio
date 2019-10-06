import React, { Component } from "react";
import "./portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <div className="container-fluid">
          <div className="row">
            <div
              id="profile-heading"
              className="col-12 my-5 text-center delayed-6"
            >
              <p className="profile-entry">Portfolio</p>
              <p className="profile-details">
                There is only one corner of the universe you can be certain of
                improving, and that's your own self.
              </p>
              <hr className="line-options"></hr>
            </div>
          </div>
          <div class="card col-12 mx-auto" style={{ maxWidth: "60vh" }}>
            <div class="row no-gutters">
              <div class="col-4 mx-auto">
                <img
                  src={require("./resources/EasyNews.PNG")}
                  class="card-img mx-2"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center">Easy News</h5>
                  <p class="card-text text-justify">
                    Easy News is a news site built on The Guardian's API.
                    Initially started as a local host project to practice on
                    .Net Framework. In time I decided to take things a little
                    bit further and wanted to learn Microsoft Azure. To practice
                    on Azure I imported my old master branch from GitHub to
                    Azure DevOps. I have set up a virtual machine on Azure Cloud
                    and linked devops to my VM. During the work I am going to
                    perform on this website I will use scrum methodologies,
                    Kanban, Continuous Integration and Continuous Delivery
                    (CI/CD) and many more.
                  </p>
                  <div className="row">
                    <div className="col-6 text-center">
                      <a href="https://dev.azure.com/ardaburak92/Easy%20News/_wiki/wikis/Easy-News.wiki/1/Easy-News-quick-guide">
                        <h5>More Info</h5>
                      </a>
                    </div>
                    <div className="col-6 text-center">
                      <a href="https://dev.azure.com/ardaburak92/_git/Easy%20News">
                        <h5>Source Code</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-12 mx-auto" style={{ maxWidth: "60vh" }}>
            <div class="row no-gutters">
              <div class="col-4 mx-auto">
                <img
                  src={require("./resources/holidayapi.png")}
                  class="card-img mx-2"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center">GreenFluxHolidayAPI</h5>
                  <p class="card-text text-justify">
                    This is an API that wrapps the Nager.Date API. It has three
                    main features. 1. Which country had the most holidays this
                    year? 2. Which month had most holidays if you compare
                    globally? 3. Which country had the most unique holidays?
                    E.g. days that no other country had a holiday. Powered by
                    .Net Core and Swagger.
                  </p>
                  <div className="row">
                    <div className="col-6 text-center">
                      <a href="https://dev.azure.com/ardaburak92/GreenFluxHolidayAPI/_wiki/wikis/GreenFluxHolidayAPI.wiki/2/GreenFluxHolidayAPI">
                        <h5>More Info</h5>
                      </a>
                    </div>
                    <div className="col-6 text-center">
                      <a href="https://dev.azure.com/ardaburak92/_git/GreenFluxHolidayAPI">
                        <h5>Source Code</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-12 mx-auto" style={{ maxWidth: "60vh" }}>
            <div class="row no-gutters">
              <div class="col-4 mx-auto">
                <img
                  src={require("./resources/IRUCSV.png")}
                  class="card-img mx-2"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center">IRUWebAPI</h5>
                  <p class="card-text text-justify">
                    IRUWebAPI is essentially a very large CVS file to JSON
                    converter. It stream downloads the given CSV file url so
                    working on enormous files becomes possible. At the end of
                    the operation the API also saves the CSV data to SQL
                    Express.
                  </p>
                  <div className="row">
                    <div className="col-6 text-center">
                      <a href="https://dev.azure.com/ardaburak92/NetCoreIRUWebAPI">
                        <h5>More Info</h5>
                      </a>
                    </div>
                    <div className="col-6 text-center">
                      <a href="https://dev.azure.com/ardaburak92/_git/NetCoreIRUWebAPI">
                        <h5>Source Code</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container-fluid mx-auto" id="fontawesome-links">
          <div className="col-sm-6 col-md-3 mx-auto">
            <a href="https://www.linkedin.com/in/arda-ekmekci/">
              <FontAwesomeIcon
                className="text-center linkedinIcon"
                icon={["fab", "linkedin"]}
              />
            </a>
          </div>

          <div className="col-sm-6 col-md-3 mx-auto">
            <a href=" https://github.com/Birblicious">
              <FontAwesomeIcon
                className="text-center githubIcon"
                icon={["fab", "github"]}
              />
            </a>
          </div>
          <div className="col-sm-6 col-md-3 mx-auto">
            <a href=" https://dev.azure.com/ardaburak92/">
              <FontAwesomeIcon
                className="text-center cloudIcon"
                icon={faCloud}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
