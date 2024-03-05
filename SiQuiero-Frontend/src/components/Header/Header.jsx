import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className="header_web_boda">
    <div className="container">

<div className="menu_logo">
      <div className="iniciales centrado">
        <p>A</p>
        <p className='suma'>+</p>
        <p>D</p>
      </div>

      <div className="menu_web">

<nav aria-label="menu_web">
<ul className="menubar-navigation" role="menubar" aria-label="Mythical University">
  <li role="none" className='active'>
    <a role="menuitem" href="/invitacion" className='linea_rosa'>Boda</a>
  </li>
  
  <li role="none">
    <a role="menuitem" href="/invitacion/ubicacion" className='linea_rosa'> Ubicación </a>
  </li>
  
  <li role="none">
    <a role="menuitem" href="/invitacion/regalos" className='linea_rosa'> Regalos </a>
  </li>
 
</ul>
</nav>

</div>
</div>

    </div>

  </div>
  )
}

export default Header