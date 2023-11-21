import React, { useState } from "react";
import { useAnimalContext } from "../api/Animal";
import ListCard from "./Component/ListCard";
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "react-bootstrap";
import Header from "./Component/Header";

const ContinentPage = () => {
  const [basicActive, setBasicActive] = useState("Asia");
  const { animals } = useAnimalContext();

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const filteredAnimals = basicActive
    ? animals.filter((animal) => animal.continent.includes(basicActive))
    : [];

  return (
    <div>
      <Header />
      <Container className="mt-3">
        <Container style={{ marginTop: "125px" }}>
          <Nav
            defaultActiveKey="Asia"
            className="nav-fill bg-green-200 rounded-4 gap-3 nav-pills"
          >
            <Nav.Item>
              <Nav.Link
                eventKey="Asia"
                onClick={() => handleBasicClick("Asia")}
              >
                Asia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="Africa"
                onClick={() => handleBasicClick("Africa")}
              >
                Africa
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="South America"
                onClick={() => handleBasicClick("South America")}
              >
                South America
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>

        <ListCard animals={filteredAnimals} />
      </Container>
    </div>
  );
};

export default ContinentPage;
