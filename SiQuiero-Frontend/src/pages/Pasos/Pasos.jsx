import PasosCard from '../../components/PasosCard/PasosCard'
import { Link } from "react-router-dom";
import "./Pasos.css";

function Pasos() { 
 
 return (
  <div className="pasos relative caja">


<div className="header_login centrado">
        <Link to="/portada">
          <div className="logo">
            <img src="logo2.png" alt="" />
          </div>
        </Link>
      </div>

      <div className="main_pasos centrado">

<div className="simuladores relative">
  <div className="simulador_web">
          <div className="padre_imagen relative">
            <div className="imagen absolute"></div>
          </div>
        </div>

        <div className="simulador_movil absolute">
          <div className="padre_imagen relative">
            <div className="imagen absolute"></div>
          </div>
        </div>
</div>
        

      </div>

      <div className="lateral centrado">
      <div>
      <h1>¡Empieza la aventura!</h1>
      <p>Diseña tu Web de Boda</p>
      < PasosCard/>
      </div>
      </div>


   </div>
 )
}

export default Pasos