import React, { Component } from "react";

import Landing from "../landing/landing";
import Navbar from "../navigation/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <body data-spy="scroll" data-target="#navbarResponsive" />
        <div>
          <Navbar />
        </div>
        <div>
          <Landing />
        </div>
        <div>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vestibulum mattis ex eget tincidunt. Mauris ornare, dolor eget
            eleifend mattis, augue ante auctor dolor, id lobortis nisi libero
            efficitur massa. Nulla vel augue a est aliquam porta. Donec vel
            massa lacinia, fringilla enim non, tempor dolor. Aenean vel
            convallis urna, et semper diam. Quisque id lectus nec orci blandit
            mattis. Nam a orci tincidunt diam tempus fringilla vel eu justo.
            Suspendisse vehicula odio vel tortor imperdiet, sed fringilla nibh
            cursus. Vestibulum tincidunt neque at nulla convallis, eget dapibus
            augue consequat. Praesent sit amet ipsum lacus. Vestibulum a
            facilisis enim, maximus cursus dui. Duis vitae gravida velit. Nullam
            malesuada diam sed leo mollis, ut ullamcorper est pulvinar. Fusce
            sed elit nunc. Aliquam at ligula augue. Aliquam blandit in tortor
            nec fermentum. Duis a ligula metus. Suspendisse a accumsan eros.
            Morbi feugiat ex porttitor nisl eleifend, sed tincidunt nulla
            euismod. Cras dignissim consequat odio eu egestas. Mauris
            condimentum ac sapien vel dignissim. Nulla a magna lacinia ligula
            elementum egestas ac sit amet diam. Donec tincidunt sapien sit amet
            felis condimentum tempus. Sed feugiat nisl ultricies, consectetur
            risus in, mattis augue. Nam scelerisque congue velit ac posuere.
            Quisque non nunc lacus. Duis rhoncus augue vitae erat egestas
            finibus. Donec venenatis sagittis lacus, eget convallis ligula
            malesuada id. Sed vestibulum vulputate leo, porta semper augue
            maximus finibus. Vestibulum facilisis consequat tortor eu pretium.
            In ut fermentum lectus. Etiam dignissim, tellus vitae laoreet
            laoreet, ligula neque molestie sapien, quis sodales nunc ligula eget
            lorem. Mauris et cursus dui. Cras consectetur tortor at accumsan
            commodo. Vestibulum vitae sollicitudin mi, tincidunt pharetra enim.
            Sed vel lectus rhoncus, dictum ante et, gravida erat. Nullam
            tristique mi erat, eu ullamcorper tortor vulputate a. Nullam sed
            dolor elementum, varius libero quis, ultricies arcu. Proin dapibus
            sodales erat ut faucibus. Vivamus at urna ac orci consequat
            sollicitudin. Integer commodo erat vitae tortor commodo aliquam. Sed
            fringilla libero sed elit pharetra, at consequat nisl fermentum.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nullam sit amet scelerisque nibh.
            Suspendisse in lobortis tortor. Duis pretium augue ut enim dapibus
            elementum. Curabitur sed enim molestie, aliquet tellus sed, suscipit
            odio. Etiam tempor venenatis erat eu tempor. In hac habitasse platea
            dictumst. Fusce sed egestas est. Praesent sodales purus vitae mi
            lacinia, id sodales dui lobortis. Donec molestie et ex nec sagittis.
            Nulla non gravida risus, id finibus felis. Pellentesque sodales dui
            eget sollicitudin sollicitudin. Integer laoreet facilisis ipsum sed
            ultrices. Proin gravida, dolor nec imperdiet faucibus, turpis mi
            faucibus dolor, nec iaculis dui arcu eget dolor. Nunc quis urna ut
            libero cursus molestie eget vitae sem. Curabitur a ornare felis.
            Nunc id congue erat.
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
