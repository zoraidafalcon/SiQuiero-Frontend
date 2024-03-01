import React, { useState } from 'react'
import {login} from '../../services/authService'
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import { useNavigate, Link} from 'react-router-dom'

function LoginCard() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async () => {
    const {result}  = await login({ email, password})
        console.log(result)
      localStorage.setItem('token', result.token)
      localStorage.setItem('role', result.role)
         
      //para admin o user
      if (localStorage.getItem('role') === "admin") {
        return navigate('/home')
      } else {
        return navigate('/portada')
      }
      
    }
  
    return (
      <Card sx={{ maxWidth: '500px' }}>
        <CardContent>
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
        <div className="no_cuenta centrado">
          <p>¿No tienes cuenta?</p>
          <Link to ='/signup'> 
          <p>Regístrate</p>
          </Link>
            
          </div>

        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          
          {/* <Button  color="success">
            Login
          </Button> */}

          <Link to="/login">
            <button onClick={onLogin} className="hvr_horizontal">Accede</button>
          </Link>

        </CardActions>
      </Card>
    )
  }
  
  export default LoginCard

