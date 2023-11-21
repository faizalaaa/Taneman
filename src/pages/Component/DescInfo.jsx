import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const DescInfo = ({ animal }) => {
  const { imageLink, desc } = animal;

  return (
    <Container fluid>
      <Card>
        <Row>
          <Col md={4}>
            <Card.Img
              src={imageLink}
              alt="..."
              className="img-fluid"
              style={{ maxHeight: "130px", objectFit: "cover" }}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DescInfo;
