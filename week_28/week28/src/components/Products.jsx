import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DeviceInfos } from "../DeviceInfos";

const Products = () => {
  return (
    <Container className="pro-cont">
      <Row>
        {DeviceInfos.map((list) => {
          return (
            <Col
              md="4"
              lg="3"
              xl="2"
              sm="6"
              xs="6"
              style={{ marginTop: "20px" }}
              key={list.id}>
              <Card className="cardbody">
                <Card.Img
                  variant="top"
                  src={list.imageUrl}
                  className="img-card"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title style={{ fontSize: "15px" }}>
                    {list.name}
                  </Card.Title>
                  <Link to={`/${list.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
