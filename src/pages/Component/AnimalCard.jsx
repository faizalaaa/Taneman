import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const AnimalCard = ({ animal }) => {
  const { id, name, continent, imageLink, latinName } = animal;

  return (
    <Container className="gap-4 mt-4 container-fluid d-flex">
      <Link to={`/animal/${id}`} className="text-decoration-none">
        <Card
          className="shadow-lg text-center animationcard"
          style={{ width: "15rem" }}
        >
          <Card.Img
            src={imageLink}
            alt="thumbnail"
            variant="top"
            style={{ maxHeight: "130px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title tag="h5" className="card-text fst-italic">
              {latinName}
            </Card.Title>
            <Card.Title tag="h3" className="card-title">
              {name}
            </Card.Title>
            <Card.Text className="card-text text-decoration-none">
              Continent:{" "}
              {continent.map((row, index) => (
                <span key={row}>
                  {row}
                  {index !== continent.length - 1 ? ", " : ""}
                </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Container>
  );
};

export default AnimalCard;
