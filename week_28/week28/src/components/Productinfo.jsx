import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { DeviceInfos } from "../DeviceInfos";
const Productinfo = () => {
  const { id } = useParams();
  return (
    <Container>
      {DeviceInfos.map((info) => {
        if (id === info.id)
          return (
            <Row key={info.id}>
              <Col md="3" lg="2" className="devinfol">
                <h5 className="devvv">Device Specifications</h5>
                <Table striped="columns" variant="dark">
                  <thead>
                    <tr>
                      <th>Device Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{info.name}</td>
                    </tr>
                  </tbody>
                </Table>
                <Table striped="columns" variant="dark">
                  <thead>
                    <tr>
                      <th>Year Released</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{info.year}</td>
                    </tr>
                  </tbody>
                </Table>
                <Table striped="columns" variant="dark">
                  <thead>
                    <tr>
                      <th>Screen Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{info.screenSize}</td>
                    </tr>
                  </tbody>
                </Table>
                <Table striped="columns" variant="dark">
                  <thead>
                    <tr>
                      <th>Storage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{info.storage}</td>
                    </tr>
                  </tbody>
                </Table>
                <Table striped="columns" variant="dark">
                  <thead>
                    <tr>
                      <th>Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{info.color}</td>
                    </tr>
                  </tbody>
                </Table>
                <Table striped="columns" variant="dark">
                  <thead>
                    <tr>
                      <th>Chip</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{info.chip}</td>
                    </tr>
                  </tbody>
                </Table>
                <Table striped="columns" variant="dark">
                  <thead>
                    <tr>
                      <th>Sensors</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{info.sensors}</td>
                    </tr>
                  </tbody>
                </Table>
                <Table striped="columns" variant="dark">
                  <thead>
                    <tr>
                      <th>Sim</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{info.sim}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md="9" lg="10" className="devinfor">
                <h1 className="devinfo">{info.name}</h1>
                <div className="videoinfob">
                  <div className="videoinfo">
                    <img
                      className="img-fluid immgg"
                      src={info.imageUrl1}
                      alt="device pic"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          );
      })}
    </Container>
  );
};

export default Productinfo;
