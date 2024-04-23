import { useNavigate } from "react-router-dom"; 

const Grilla = () => {
  const navigate = useNavigate();



const handlePersonaje = () => {
  navigate("/personajes")
  }

  return (
<div className="container text-center">
  <div className="row">
    <div className="col m-5">
      <h1>MAGOS PRINCIPIANTES</h1>
    </div>
    <div>
      <img className="w-100" src="src/assets/img/principal.jpg" alt='magos'/>
    </div>
    <div className='mt-5' >
      <h2>Busca tu personaje favorito aqui:
        <div onClick={handlePersonaje}
        ><i className="fa-solid fa-wand-magic-sparkles"></i>
        </div> 
        </h2>
    </div>
    <div>
    </div>
  </div>
</div>
  )
}

export default Grilla
