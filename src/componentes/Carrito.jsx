import { useCarrito } from '../context/CarritoContext';


const Carrito = () => {

  const { allPersonaje } = useCarrito();
  console.log(allPersonaje)

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {allPersonaje.map((personaje, index) => (
          <li key={index}>{personaje.attributes.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Carrito
