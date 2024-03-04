import React from 'react'
import { Card, CardActions, CardHeader, Divider} from '@mui/material'
import { Link} from 'react-router-dom'

function PortadaCard() {
  
    return (
      <Card sx={{ maxWidth: '500px' }}>
        <CardHeader title="Portada" />
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to ="/pasos">
            <button>Crear invitacion</button>
            </Link>
            <Link to ="/regalos">
            <button>Ver Lista de regalos</button>
            </Link>
            <Link to ='/invitacion'>
            <button>Ver invitacion</button>
            </Link>
        </CardActions>
      </Card>
    )
  }
  
  export default PortadaCard