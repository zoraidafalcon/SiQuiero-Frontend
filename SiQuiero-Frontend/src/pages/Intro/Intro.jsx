import React from 'react'
import './Intro.css'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material';
function Intro() {

  return (
    <div className='intro relative caja'>
      <div className="padre_imagen absolute">
      <div className="imagen"></div>
      <div className="filtro_color absolute"></div>
      </div>

      <section className='section_intro relative'>
      <Container>

        <div className="logotipo">
          <img src="logo.png" alt="" />
        </div>
    
    <h1>Intro</h1>
    
    <Link to='/login'>
    <button>sí quiero</button>
    </Link>
    </Container>
    </section>
    </div>
  )
}

export default Intro