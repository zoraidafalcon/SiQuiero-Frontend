import React from 'react'
import { Card, CardActions} from '@mui/material'
import { Link} from 'react-router-dom'
import "./PortadaCard.css";

function PortadaCard() {
  
    return (
<>
   


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