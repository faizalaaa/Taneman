import React from "react";
import { Container, Card } from "react-bootstrap";

const TopInfo = ({ animal }) => {
  const { lifeExpectancy, swim, continent, biome } = animal;

  return (
    <Container className=" container" style={{ marginBottom: "35px" }}>
      <Container md={3} className="container-fluid mt-3 col">
        <Card className="text-center">
          <Card.Title>Continent</Card.Title>
          <Card.Text>
            {continent.map((row, index) => (
              <span key={row}>
                {row}
                {index !== continent.length - 1 ? ", " : ""}
              </span>
            ))}
          </Card.Text>
        </Card>
      </Container>
      <Container md={3} className="container-fluid mt-3 col">
        <Card className="text-center">
          <Card.Title>Biome</Card.Title>
          <Card.Text>
            {biome.map((row, index) => (
              <span key={row}>
                {row}
                {index !== biome.length - 1 ? ", " : ""}
              </span>
            ))}
          </Card.Text>
        </Card>
      </Container>
    </Container>
  );
};

export default TopInfo;
