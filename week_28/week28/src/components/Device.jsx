import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const Device = (props) => {
  return (
    <Col md="2" style={{ marginTop: "20px" }}>
      <Card className="cardbody">
        <Card.Img variant="top" src={img1} className="img-card" />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>jjnn</Card.Title>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Device;
