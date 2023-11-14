import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { AUTH_ROUTE, MAIN_ROUTE } from "../../utils/Consts";
import { useNavigate } from "react-router-dom";

const MainNavBar = () => {

  const navigate = useNavigate()

  return (
    <Navbar bg="transparent" data-bs-theme="dark" style={{ zIndex: 50 }}>
      <Container>
        <Nav className="ml-auto" style={{ cursor: 'pointer' }} onClick={() => navigate(MAIN_ROUTE)}>
          <h4 style={{fontFamily: 'Playfair Display'}}>Bullet Journal</h4>
        </Nav>
        <Nav className="ml-auto">
          <Button variant={"outline-dark"} style={{fontFamily: 'Playfair Display'}} onClick={() => navigate(AUTH_ROUTE)}>Авторизация</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MainNavBar;