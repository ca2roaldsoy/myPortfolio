import React from "react";
import { useSpring, animated } from "react-spring";
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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const props = useSpring({
    color: "blue",
    from: { color: "red" },
    config: { duration: 3000 },
  });

  return (
    <>
      <animated.h1 style={props}> Cato Roaldsøy</animated.h1>

      <Router>
        <Row>
          <Col lg={3}>
            <NavLink to="/profile" className="nav-link" role="link">
              Profile
            </NavLink>
          </Col>

          <Col lg={3}>
            <NavLink to="/experience" className="nav-link" role="link">
              Experience
            </NavLink>
          </Col>

          <Col lg={3}>
            <NavLink to="/projects" className="nav-link" role="link">
              Projects
            </NavLink>
          </Col>

          <Col lg={3}>
            <NavLink to="/contact" className="nav-link" role="link">
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
