import React from 'react'
import './Intro.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
function Intro() {

  return (
    <>
    <h1>Intro</h1>
    
    <Button variant="contained">Hello world</Button>
    <Link to='/login'>
    <button>Ir a login</button>
    </Link>
    </>
  )
}

export default Intro