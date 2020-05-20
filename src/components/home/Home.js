import React from "react";
import { bounceInDown, fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Profile from "../profile/Profile";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <>
      <h1 className="animate__animated animate__fadeIn">Cato Roaldsøy</h1>

      <Router>
        <Row>
          <Col
            lg={3}
            className="animate__animated animate__bounceInDown animate__slow"
          >
            <NavLink to="/profile" role="link">
              Profile
            </NavLink>
          </Col>

          <Col
            lg={3}
            className="animate__animated animate__bounceInDown animate__slower"
          >
            <NavLink to="/experience" role="link">
              Experience
            </NavLink>
          </Col>

          <Col
            lg={3}
            className="animate__animated animate__bounceInDown animate__slow animate__delay-1s"
          >
            <NavLink to="/projects" role="link">
              Projects
            </NavLink>
          </Col>

          <Col
            lg={3}
            className="animate__animated animate__bounceInDown animate__slower animate__delay-1s"
          >
            <NavLink to="/contact" role="link">
              Contact
            </NavLink>
          </Col>
        </Row>

        {/* Navigation showing correct component */}

        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default Home;
