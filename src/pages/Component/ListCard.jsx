import React from "react";
import AnimalCard from "./AnimalCard";
import { Container, Row, Col } from "react-bootstrap";

const ListCard = ({ animals }) => {
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ paddingTop: "80px" }}
    >
      <h1 className="text-center text-biru-ta pt-12 fw-bold pt-20">
        List Tanaman{" "}
      </h1>

      <Row className="container-fluid justify-content-center mx-auto">
        {animals.map((data) => (
          <Col xl={3} md={6} lg={4} sm={12} key={data.id}>
            <AnimalCard animal={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListCard;
