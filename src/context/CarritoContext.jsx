// CarritoContext.js
import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [allPersonaje, setAllPersonaje] = useState([]);

  return (
    <CarritoContext.Provider value={{ allPersonaje, setAllPersonaje }}>
      {children}
    </CarritoContext.Provider>
  );
};
