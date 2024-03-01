import React, { useState } from 'react'
import {wedding} from '../../services/wedding'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import { useNavigate} from 'react-router-dom'

function PasosCard() {
    const navigate = useNavigate()
    const [persona1, setPersona1] = useState('')
    const [persona2, setPersona2] = useState('')
    const [date, setDate] = useState('')
    const [place, setPlace] = useState('')
  
    const onWedding = async () => {
    const result = await wedding({ persona1, persona2, date, place })
    
    navigate('/invitacion')
    }
  
    return (
      <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Mi boda" />
      <CardContent>
        <TextField
          onChange={(e) => setPersona1(e.target.value)}
          label="Mi nombre es ..."
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPersona2(e.target.value)}
          label="El nombre de mi pareja es ..."
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setDate(e.target.value)}
          label="date"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPlace(e.target.value)}
          label="place"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onWedding} color="success">
            crear invitacion
          </Button>
      </CardActions>
    </Card>
    
    )
  }
  export default PasosCard
