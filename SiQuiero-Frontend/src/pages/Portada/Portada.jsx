import PortadaCard from '../../components/PortadaCard/PortadaCard'
import Invitacion from '../Invitacion/Invitacion';
import { Link } from "react-router-dom";
import "./Portada.css";

function Portada() {

  return (
    <div className="gestion relative caja">
      <div className="header_portada centrado">
        <Link to="/portada">
          <div className="logo">
            <img src="logo2.png" alt="" />
          </div>
        </Link>
      </div>
      <div className="lateral centrado">
        <div className="bola_usuario centrado">
          <p>A</p>
        </div>
        <div>

          <p>Web de Boda</p>
          <h1>Asd & Dfg</h1>

          < PortadaCard />
        </div>
      </div>
      <div className="simulador_web_boda">
       <Invitacion></Invitacion>
      </div>
    </div>

  )
}

export default Portada