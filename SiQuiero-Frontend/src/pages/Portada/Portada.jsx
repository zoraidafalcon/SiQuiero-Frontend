import PortadaCard from '../../components/PortadaCard/PortadaCard'
import { Link } from "react-router-dom";
import "./Portada.css";

function Portada() { 
 
 return (
  <div className="pasos relative caja">


  <div className="header_portada centrado">
          <Link to="/portada">
            <div className="logo">
              <img src="logo2.png" alt="" />
            </div>
          </Link>
        </div>
  
        <div className="lateral centrado">
        <div>
        
        <p>Web de Boda</p>
        <h1>Asd & Dfg</h1>

        <ul className='menu_portada'>
          <li>
            <a href=""></a>
          </li>
        </ul>
         < PortadaCard/>
        </div>
        </div>
  
  
     </div>
 
 )
}

export default Portada