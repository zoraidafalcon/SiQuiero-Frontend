import React, { useState } from 'react'
import {signup} from '../../services/authService'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function SignupCard() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const onSignup = async () => {
    const result  = await signup({ name, surname, email, password })
      localStorage.setItem('token', result.token)
        
      navigate('/home')
    }
  
    return (
      <Card sx={{ maxWidth: '500px' }}>
        <CardHeader title="Signup" />
        <CardContent>
        <TextField
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
        />
        <TextField
            onChange={(e) => setSurName(e.target.value)}
            label="Surname"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
        />
        <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
        />
        <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            fullWidth={true}
        />
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onSignup} color="success">
            Signup
          </Button>
        </CardActions>
      </Card>
    )
  }
  
  export default SignupCard