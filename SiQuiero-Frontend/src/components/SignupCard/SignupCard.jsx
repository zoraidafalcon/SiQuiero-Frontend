import React, { useState } from 'react'
import {signup} from '../../services/authService'
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'

function SignupCard() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const onSignup = async () => {
    const result  = await signup({ name, surname, email, password })
      localStorage.setItem('token', result.token)
        
      navigate('/login')
    }
  
    return (
      <Card sx={{ maxWidth: '500px' }}>
        <CardContent>
        <TextField
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="standard"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
        />
        <TextField
            onChange={(e) => setSurName(e.target.value)}
            label="Surname"
            variant="standard"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
        />
        <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="standard"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
        />
        <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="standard"
            fullWidth={true}
        />
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onSignup} color="success">
            Signup
          </Button>

          <Link to="/login">
            <button className="hvr_horizontal">Registrarme</button>
          </Link>
        </CardActions>
      </Card>
    )
  }
  
  export default SignupCard