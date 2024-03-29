import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Partners from "../pages/Partners";
import Stories from "../pages/Stories";
import Gallery from "../pages/Gallery";
import ContactUs from "../pages/ContactUs";
import Mission from "../pages/Mission";
import Vision from "../pages/Vision";
import Leadership from "../pages/Leadership";
import Team from "../pages/Team";
import Partnership from "../pages/Partnership";
import Training from "../pages/Training";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Projects" component={Projects} />
    <Route exact path="/Partners" component={Partners} />
    <Route exact path="/stories" component={Stories} />
    <Route exact path="/Gallery" component={Gallery} />
    <Route exact path="/ContactUs" component={ContactUs} />
    <Route exact path="/Mission" component={Mission} />
    <Route exact path="/Vision" component={Vision} />
    <Route exact path="/Leadership" component={Leadership} />
    <Route exact path="/Team" component={Team} />
    <Route exact path="/Partnership" component={Partnership} />
    <Route exact path="/Training" component={Training} />
    <Route exact path="/Project" component={Project} />
    <Route exact path="/Contact" component={Contact} />
  </Switch>
);
