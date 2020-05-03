import React from "react";
import { Col, Row, ListGroupItem, ListGroup, Image } from "react-bootstrap";

function MyInfo() {
  return (
    <Row id="profile">
      <Col sm={12} lg={6}>
        <Image src="../me.jpg" alt="profile of me" fluid rounded />
      </Col>
      <Col sm={12} lg={6} id="profile_info">
        <ListGroup variant="flush">
          <ListGroupItem>
            <b>Name:</b> Cato Roaldsøy
          </ListGroupItem>
          <ListGroupItem>
            <b>Age:</b> 32 years
          </ListGroupItem>
          <ListGroupItem>
            <b>Adress:</b> P. Krohns Veg 12
          </ListGroupItem>
          <ListGroupItem>
            <b>City:</b> 4352 Kleppe
          </ListGroupItem>
          <a href="https://www.facebook.com/people/Cato-Roalds%C3%B8y/100000434225604">
            Look me up on Facebook
          </a>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default MyInfo;
