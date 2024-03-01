import React, { useState } from 'react'

import { Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import { useNavigate, Link} from 'react-router-dom'

function PasosCard() {
    // const navigate = useNavigate()
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
  
    // const onLogin = async () => {
    // const {result}  = await login({ email, password })
    //   localStorage.setItem('token', result.token)
    //   localStorage.setItem('role', result.role)
    //   navigate('/paso2')
    // }
  
    return (
      <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Mi boda" />
      <CardContent>
        <TextField
          onChange={(e) => setPerson1(e.target.value)}
          label="Mi nombre es ..."
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPerson2(e.target.value)}
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
      <Link to ='/paso3'>
            <button>Crear invitacion</button>
            </Link>
      </CardActions>
    </Card>
    
    )
  }
  export default PasosCard
