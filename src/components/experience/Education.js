import React from "react";
import { Col, Row, Card, CardTitle, CardDeck } from "react-bootstrap";
import { CardText } from "react-bootstrap/Card";

function Education() {
  return (
    <section>
      <h3>Education</h3>
      <h4>
        <b>Noroff</b>
        <p> - School of technology and digital media</p>
      </h4>
      <Row>
        <Col sm={6} lg={3}>
          <div className="card-flip">
            <div className="flip">
              <div className="front">
                <Card>
                  <Card.Title>3D Design and Animation</Card.Title>
                </Card>
              </div>

              <div className="back">
                <Card>
                  <Card.Body>
                    <Card.Text>Autodesk 3ds Max</Card.Text>
                    <Card.Text>Adobe Photoshop</Card.Text>
                    <Card.Text>Design</Card.Text>
                    <Card.Text>Animation</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        <Col sm={6} lg={3}>
          <div className="card-flip">
            <div className="flip">
              <div className="front">
                <Card>
                  <Card.Title>3D Film Production</Card.Title>
                </Card>
              </div>

              <div className="back">
                <Card>
                  <Card.Body>
                    <Card.Text>Autodesk 3ds Max</Card.Text>
                    <Card.Text>Design</Card.Text>
                    <Card.Text>Animation</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        <Col sm={6} lg={3}>
          <div className="card-flip">
            <div className="flip">
              <div className="front">
                <Card>
                  <Card.Title>3D Game Design</Card.Title>
                </Card>
              </div>

              <div className="back">
                <Card>
                  <Card.Body>
                    <Card.Text>Autodesk 3ds Max</Card.Text>
                    <Card.Text>Unreal Engine</Card.Text>
                    <Card.Text>Adobe Photoshop</Card.Text>
                    <Card.Text>Design</Card.Text>
                    <Card.Text>Animation</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        <Col sm={6} lg={3}>
          <div className="card-flip">
            <div className="flip">
              <div className="front">
                <Card>
                  <Card.Title>Front-end Development</Card.Title>
                </Card>
              </div>

              <div className="back">
                <Card>
                  <Card.Body>
                    <Card.Text>HTML</Card.Text>
                    <Card.Text>CSS</Card.Text>
                    <Card.Text>JavaScript</Card.Text>
                    <Card.Text>Git/GitHub</Card.Text>
                    <Card.Text>Terminal/Bash</Card.Text>
                    <Card.Text>WCAG</Card.Text>
                    <Card.Text>SEO</Card.Text>
                    <Card.Text>Agile</Card.Text>
                    <Card.Text>Scrum/Kanban</Card.Text>
                    <Card.Text>Adobe Illustrator</Card.Text>
                    <Card.Text>Adobe Photoshop</Card.Text>
                    <Card.Text>Design</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Education;
