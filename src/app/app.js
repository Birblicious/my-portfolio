import React, { Component } from "react";

import Landing from "../landing/landing";
import Navbar from "../navigation/navbar";
import Profile from "../profile/profile";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <body data-spy="scroll" data-target="#navbarResponsive" />
          <Navbar />
        </div>
        <div>
          <Landing />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    );
  }
}

export default App;
