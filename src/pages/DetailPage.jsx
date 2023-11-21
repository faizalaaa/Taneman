import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAnimalContext } from "../api/Animal";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import DescInfo from "./Component/DescInfo";
import TopInfo from "./Component/TopInfo";
import Header from "./Component/Header";

const DetailPage = () => {
  const { id } = useParams();
  const { animals } = useAnimalContext();

  const animal = animals.find((animal) => animal.id === parseInt(id));
  const firstAnimal = id > 1;
  const lastAnimal = id < 90;

  return (
    <div>
      <Header />
      <Container className="mt-5 mb-5">
        {animal && (
          <Container className="d-flex  justify-content-center">
            <Card
              className="gap-3 bg-green-500"
              style={{ width: "100vw", marginTop: "50px" }}
            >
              <Container className="d-flex flex-row justify-content-between">
                {/* <Link
                  to={`/animal/${animal.id - 1}`}
                  className="text-decoration-none"
                >
                  {firstAnimal && (
                    <FaChevronCircleLeft
                      size="40px"
                      className="ml-3 mt-4"
                      style={{ marginLeft: "20px", color: "white" }}
                    />
                  )}
                </Link> */}

                <Card.Title className="mt-3 mx-auto h5 text-center text-white">
                  #{animal.id} {animal.name}
                  <br />
                  <span style={{ fontSize: "12px" }} className="fst-italic ">
                    {animal.latinName}
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    Classification: {animal.category}
                  </span>
                </Card.Title>

                {/* <Link to={`/animal/${animal.id + 1}`}>
                  {lastAnimal && (
                    <FaChevronCircleRight
                      size="40px"
                      className="ml-3 mt-4"
                      style={{ marginRight: "20px", color: "white" }}
                    />
                  )}
                </Link> */}
              </Container>
              {/* DescInfo */}
              <DescInfo animal={animal} />
              {/* TopInfo */}
              <TopInfo animal={animal} />
            </Card>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default DetailPage;
