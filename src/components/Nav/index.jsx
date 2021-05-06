import React from "react";
import { NavLink } from "react-router-dom";
import "../../theme/sass/components/navbar.scss";

const Nav = () => {
  return (
    <nav
      id="_navbar"
      class="navbar _navbar navbar-area navbar-expand-lg nav-absolute white nav-style-01"
    >
      <div class="container nav-container">
        <div class="responsive-mobile-menu">
          <div class="cropped-logo">
            {/* <img src="/images/cropped-logo.jpg" alt="cccrn logo" /> */}
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/appside_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
        </div>
        <div class="list-items" id="appside_main_menu">
          <ul class="navbar-nav h-100 d-flex justify-content-end align-items-center">
            <li class="active">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li class="d-flex justify-content-center align-items-center">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/about"
              >
                About
              </NavLink>
              <div className="sub-menu-1">
                <ul>
                  <li className="dropdown">
                    <NavLink
                      exact
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                      to="/mission"
                    >
                      Mission
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                      to="/vision"
                    >
                      Vision
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                      to="/about"
                    >
                      Leadership
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li class="">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/projects"
              >
                Project
              </NavLink>
              <div className="sub-menu-2">
                <ul>
                  <li className="dropdown-2">
                    <NavLink
                      exact
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                      to="/about"
                    >
                      Grants
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                      to="/about"
                    >
                      Trainings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                      to="/about"
                    >
                      Facilities
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li class="d-flex justify-content-center align-items-center">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/contact"
              >
                Partnership
              </NavLink>
            </li>
            <li class="d-flex justify-content-center align-items-center">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/contact"
              >
                Training
              </NavLink>
            </li>
            <li class="d-flex justify-content-center align-items-center">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/contact"
              >
                Gallery
              </NavLink>
            </li>
            <li class="d-flex justify-content-center align-items-center">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="nav-right-content" />
      </div>
    </nav>
  );
};

export default Nav;
