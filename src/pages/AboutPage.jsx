import React from "react";

import { Container, Card, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Component/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5 mb-5">
        <Container className="d-flex  justify-content-center">
          <Card
            className="gap-3 bg-green-900 d-flex flex-column text-white"
            style={{ width: "80vw", marginTop: "50px" }}
          >
            <Link to="/">
              <Image
                src="src\assets\pngwing.com.png"
                alt="profile picture"
                style={{ width: "20vw", height: "20vw" }}
                className=" mx-auto d-block animationimg"
              />
            </Link>

            <Card.Body>
              <Card.Title>
                <h1 className="text-center h1 fw-bold text-green-200 mb-3">
                  Taneman
                </h1>
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <span className="h3">Taneman</span>
                <span className="h5">
                  ini memberi tahu anda tentang tumbuhan{" "}
                  <span className="fw-bold text-green-200">
                    Teknik Komputer - Universitas Diponegoro
                  </span>{" "}
                  <a
                    className="fw-bold text-green-200 text-decoration-none"
                    href="https://vitejs.dev/"
                  >
                    React Vite
                  </a>
                  ,
                  <a
                    className="fw-bold text-green-200 text-decoration-none"
                    href="https://firebase.google.com/?hl=id"
                  >
                    Firebase
                  </a>
                  , and{" "}
                  <a
                    className="fw-bold text-green-200 text-decoration-none"
                    href="https://getbootstrap.com/"
                  >
                    Bootstrap
                  </a>
                  .
                </span>
              </Card.Text>
            </Card.Body>
            <Card.Title>
              <h1 className="text-center h1 fw-bold">Anggota</h1>
              <p className="text-center">Kelompok 24 Prak.RPLBK</p>
            </Card.Title>
            <Card.Body className="mb-4 text-center">
              <Container className="row gap-4">
                <Container md={3} className="container-fluid col ">
                  <a href="#">
                    <Image
                      src="src\assets\twibbon.jpg"
                      alt="profile picture"
                      style={{ width: "200px", height: "200px" }}
                      roundedCircle
                      className="animationimg"
                    />
                  </a>
                  <h2 className="mt-3">Ardhika Azhar Pratama</h2>
                </Container>
                <Container md={3} className="container-fluid col ">
                  <a>
                    <Image
                      src="src\assets\nabil.jpg"
                      alt="profile picture"
                      style={{ width: "200px", height: "200px" }}
                      roundedCircle
                      className="animationimg"
                    />
                  </a>
                  <h2 className="mt-3">Nabila Rizqi Mahardika</h2>
                </Container>
                <Container md={3} className="container-fluid col ">
                  <a>
                    <Image
                      src="src\assets\Izal.jpeg"
                      alt="profile picture"
                      style={{ width: "200px", height: "200px" }}
                      roundedCircle
                      className="animationimg"
                    />
                  </a>
                  <h2 className="mt-3">Faizal Tri Ardhani Wijaya</h2>
                </Container>
                <Container md={3} className="container-fluid col ">
                  <a>
                    <Image
                      src="src\assets\debo.jpg"
                      alt="profile picture"
                      style={{ width: "200px", height: "200px" }}
                      roundedCircle
                      className="animationimg"
                    />
                  </a>
                  <h2 className="mt-3">Debora Oktaria Lubis</h2>
                </Container>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default AboutPage;
