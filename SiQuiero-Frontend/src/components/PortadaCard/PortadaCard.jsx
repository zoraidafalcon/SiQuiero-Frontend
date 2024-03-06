import React, { useEffect, useState } from 'react';
import { Card, CardActions} from '@mui/material'
import { Link, NavLink, useLocation} from 'react-router-dom'
import "./PortadaCard.css";

function PortadaCard() {
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState('');

  useEffect(() => {
    // Obtener el pathname actual de la URL
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);


    return (
<>
   

{/* <div className="menu_gestion">
  
  <nav aria-label="menu_gestion_web">
    <ul className="menubar-navigation" role="menubar" aria-label="Mythical University">
      <li role="none" className='active' >
        <a role="menuitem" className=" linea_roja" >Vista Web</a>
      </li>
        
      <li role="none">
        <a role="menuitem" className="linea_roja">Diseño</a>
      </li>
        
      <li role="none">
        <a role="menuitem" className="linea_roja">Páginas</a>
      </li>
        
      <li role="none">
        <a role="menuitem" href='pasos' className="linea_roja">Configuración</a>
      </li>

      <li role="none" >
            <a role="menuitem" href='regalos' className="linea_roja">Lista de regalos</a>
      </li>

      <li role="none">
        <a role="menuitem" className="linea_roja">Actividad</a>
      </li>
    </ul>
  </nav>


</div> */}

<div className="menu_gestion">
        <nav aria-label="menu_gestion_web">
          <ul className="menubar-navigation" role="menubar" aria-label="Mythical University">
            <li role="none">
              <NavLink to="/portada" className={`linea_roja ${activeMenuItem === "/portada" ? 'active' : ''}`} activeClassName="active">Vista Web</NavLink>
            </li>
            <li role="none">
              <NavLink to="/diseno" className={`linea_roja ${activeMenuItem === "/diseno" ? 'active' : ''}`} activeClassName="active">Diseño</NavLink>
            </li>
            <li role="none">
              <NavLink to="/paginas" className={`linea_roja ${activeMenuItem === "/paginas" ? 'active' : ''}`} activeClassName="active">Páginas</NavLink>
            </li>
            <li role="none">
              <NavLink to="/configuracion" className={`linea_roja ${activeMenuItem === "/pasos" ? 'active' : ''}`} activeClassName="active">Configuración</NavLink>
            </li>
            <li role="none">
              <NavLink to="/regalos" className={`linea_roja ${activeMenuItem === "/regalos" ? 'active' : ''}`} activeClassName="active">Lista de regalos</NavLink>
            </li>
            <li role="none">
              <NavLink to="/actividad" className={`linea_roja ${activeMenuItem === "/actividad" ? 'active' : ''}`} activeClassName="active">Actividad</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Card sx={{ maxWidth: '500px' }}>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to ='/invitacion/info'>
            <button className="hvr_horizontal">Ver Web de Boda</button>

          </Link>

        </CardActions>
      </Card>

      </>
    )
  }
  
  export default PortadaCard