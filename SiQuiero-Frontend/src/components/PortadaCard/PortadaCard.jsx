import React from 'react'
import { Card, CardActions} from '@mui/material'
import { Link} from 'react-router-dom'
import "./PortadaCard.css";

function PortadaCard() {
  
    return (
<>
   

<div className="menu_gestion">
  
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


</div>
      <Card sx={{ maxWidth: '500px' }}>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to ='/invitacion'>
            <button className="hvr_horizontal">Ver Web de Boda</button>

          </Link>

        </CardActions>
      </Card>

      </>
    )
  }
  
  export default PortadaCard