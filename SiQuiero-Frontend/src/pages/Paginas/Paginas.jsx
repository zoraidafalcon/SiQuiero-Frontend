import { Link } from "react-router-dom";
import "./Paginas.css";


function Paginas() { 
 
 return (
  <div className="pasos configuracion relative caja">


<div className="header_login mantenimiento centrado">
        <Link to="/portada">
          <div className="">
            <img src="logotipo.png" alt="" />
          </div>
        </Link>
      </div>

      <div className="main_configuracion centrado">
<div className="padre_mantenimiento">
    <div className="imagen_mantenimiento">
        
    </div>
</div>
        

      </div>


   </div>
 )
}

export default Paginas