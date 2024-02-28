import React from 'react'
import '../Welcome/Welcome.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
function Welcome() {

  return (
    <>
    <h1>Welcome</h1>
    
    <Button variant="contained">Hello world</Button>
    <Link to='/login'>
    <button>Ir a login</button>
    </Link>
    </>
  )
}

export default Welcome