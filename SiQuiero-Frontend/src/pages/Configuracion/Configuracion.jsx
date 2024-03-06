import PasosCard from '../../components/PasosCard/PasosCard'
import SignupCard from '../../components/SignupCard/SignupCard';
import { Link } from "react-router-dom";
import "./Configuracion.css";


function Configuracion() { 
 
 return (
  <div className="pasos configuracion relative caja">


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
      <p>¡Configura tus datos!</p>
      <h1>Silvia & Jesús</h1>
      < SignupCard/>
      < PasosCard/>
      </div>
      </div>


   </div>
 )
}

export default Configuracion