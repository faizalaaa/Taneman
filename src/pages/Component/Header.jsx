import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const updateNavbarState = () => {
    const isScrolled = window.scrollY > 10;
    const isHome = location.pathname === "/";

    if ((isScrolled && isHome) || !isHome) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    updateNavbarState();

    const handleScroll = () => {
      updateNavbarState();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg={scrolled ? "biru-ta" : "transparent"}
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand>
          <Container fluid>
            <Link to="/" className="text-decoration-none text-reset h5">
              <img
                src="src\assets\pngwing.com.png"
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top me-1"
              />
            </Link>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <Nav.Link classname="header">
              <Link to="/" className="text-decoration-none text-reset">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link classname="header">
              <Link to="/continent" className="text-decoration-none text-reset">
                Continent
              </Link>
            </Nav.Link>

            <Nav.Link classname="header">
              <Link to="/about" className="text-decoration-none text-reset">
                Profile
              </Link>
            </Nav.Link>
          </Nav>
          <Link to="/login" className="btn btn-success" onClick={handleLogout}>
            Log Out
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
