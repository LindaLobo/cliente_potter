import React, { useContext, useState } from "react";
import logo_mago from "../assets/img/mago.gif";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import modal from "../assets/img/modal.png";
import { useCarrito } from '../context/CarritoContext';



const Navigation = () => {

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { allPersonaje, setAllPersonaje } = useCarrito();


  const sesions = () => {
    if (auth.auth == true) {
      setAuth(false);
      sessionStorage.removeItem("token", "");
      navigate("/");
    } else {
      Swal.fire({
        imageUrl: modal,
        imageWidth: 600,
        imageHeight: 500,
        imageAlt: "Wizard image",
        title: "Elige una opción",
        showCancelButton: true,
        confirmButtonText: "Iniciar Sesión",
        cancelButtonText: "Registrarse",
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigate("/sign_up")
        }
      });
    }
  };

  const handleCarritoClick = (e) => {
    e.preventDefault()
    navigate('/personajes/carrito');
  };


  return (
    <Navbar data-bs-theme="dark" className="navbar navbar-expand-lg bg-body-tertiary fs-4">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo_mago} alt="mago" style={{ width: "80px", height: "80px" }} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="text-white">Home</Nav.Link>
          <Nav.Link href="/personajes" className="text-white">Personajes</Nav.Link>
          <Nav.Link href="/eventos" className="text-white">Eventos </Nav.Link>
        </Nav>
        <Nav className="ms-md-auto">
          <Button className="sesions link-dark m-2" onClick={sesions}>
            {auth.auth ? "Cerrar Sesión" : "Iniciar Sesión"}
          </Button>
          <a href="/personajes/carrito" className="link-dark m-3" onClick={handleCarritoClick}>
          <div variant="outline-dark">{auth.auth ? 
          <i className="fa-solid fa-bag-shopping fa-xl" style={{color: "#096d19"}}></i> : " "}</div>
        </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
