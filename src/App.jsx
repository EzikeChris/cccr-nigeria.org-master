import React, { Fragment } from "react";
import "./theme/sass/app.sass";
import "./views/index";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import Routes from "./routes";

const App = () => {
  return (
    <div style={{ position: "relative" }} className="w-100">
      <Router>
        <Nav />
        <Routes />
      </Router>
    </div>
  );
};
export default App;
