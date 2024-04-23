import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grilla from "./componentes/Grilla";
import Navigation from "./componentes/Navigation";
import CardCharacter from "./componentes/CardCharacter";
import { AuthProvider } from "./context/AuthProvider";
import { CarritoProvider } from "./context/CarritoContext";
import Login from "./componentes/Login";
import SignUp from "./componentes/SignUp";
import Carrito from "./componentes/Carrito";
import Eventos from "./componentes/Eventos";

function App() {


  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CarritoProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<Grilla />}></Route>
              <Route path="/personajes" element={<CardCharacter />}></Route>
              <Route path="/eventos" element={<Eventos />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/sign_up" element={<SignUp />}></Route>
              <Route path="/personajes/carrito" element={<Carrito />} />
            </Routes>
          </CarritoProvider>
        </AuthProvider>

      </BrowserRouter>

    </>
  );
}

export default App;
