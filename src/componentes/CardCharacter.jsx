import React, { useState, useEffect } from "react";
import { Data } from "../functions/funtions";
import imagen_sombrero from "../assets/img/imagen_sombrero.svg";
import ReactPaginate from "react-paginate";
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from "../context/AuthProvider";
import Swal from "sweetalert2";



const CardCharacter = () => {
  const [personajes, setPersonajes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [personajesPorPagina] = useState(12);
  const { allPersonaje, setAllPersonaje } = useCarrito();
  const { auth } = useAuth();



  const data = async () => {
    try {
      let response = await Data();
      // console.log(response.data)
      setPersonajes(response.data);
    } catch (error) {
      console.error("Error al obtener la data:", error);
    }
  };

  useEffect(() => {
    data();
  }, []);

const indexOfLastPersonaje = (currentPage + 1) * personajesPorPagina;
  const indexOfFirstPersonaje = indexOfLastPersonaje - personajesPorPagina;
  const currentPersonajes = personajes.slice(indexOfFirstPersonaje, indexOfLastPersonaje);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const addProduct = (personaje) => {
    if (auth.auth) {
      console.log("agregando");
      setAllPersonaje([...allPersonaje, personaje]);
      console.log([...allPersonaje]);
    } else {
      Swal.fire({
        title: "Inicia sesión",
        text: "Para agregar productos al carrito, debes iniciar sesión.",
        icon: "info",
        confirmButtonText: "Entendido",
      });
    }
  }
  

  return (
    <div className="container mt-5 col-ms-2">
      <div className="row">
        {currentPersonajes.map((personaje, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card" style={{ height: "100%" }}>
              <img
                src={personaje.attributes.image ? personaje.attributes.image : imagen_sombrero}
                className="card-img-top"
                alt={personaje.attributesname}
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{personaje.attributes.name}</h5>
                {personaje.attributes.species === "Human" ? (
                  <p className="card-text">$2</p>
                ) : (
                  <p className="card-text">$1</p>
                )}
              </div>
              <button className="btn btn-success" onClick={() => addProduct(personaje)} >Comprar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
      <ReactPaginate
        pageCount={Math.ceil(personajes.length / personajesPorPagina)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
      />
      </div>

    </div>
  );
};

export default CardCharacter;
