import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import StockTable from "./StockTable";

const StockModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <div style={{ backgroundColor: "" }}>
        <Modal.Header closeButton>
          <span style={{ textTransform: "uppercase", fontWeight: "700" }}>
            {" "}
            {props.info.symbol}{" "}
          </span>{" "}
        </Modal.Header>
        <Modal.Body className="modalb">
          <img src={props.info.image} className="modalimg" />
          <div
            style={{
              width: "100%",
              height: "270px",
              overflowX: "scroll",
              marginTop: "20px",
            }}>
            <StockTable info={props.info} />
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default StockModal;
