import React, { Component, Fragment } from "react";
import {
  Nav,
  Header,
  Banner,
  About,
  Video,
  Work,
  Support,
  Partners,
  People,
  Footer,
} from "../../views";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Header />
        <About />
        <Banner />
        <Video />
        <Work />
        <Support />
        {/* <Images/> */}
        <Partners />
        <People />
        <Footer />
      </Fragment>
    );
  }
}
