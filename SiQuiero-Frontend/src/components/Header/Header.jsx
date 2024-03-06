import "./Header.css";
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation} from 'react-router-dom'

function Header() {
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState('');

  useEffect(() => {
    // Obtener el pathname actual de la URL
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);


  return (
    <div className="header_web_boda">
      <div className="container">
        <div className="menu_logo">
          <div className="iniciales centrado">
            <p>S</p>
            <p className='suma'>+</p>
            <p>J</p>
          </div>
          <div className="menu_web">
            <nav aria-label="menu_web">
              {/* <ul className="menubar-navigation" role="menubar" aria-label="Mythical University">
                <li role="none">
                  <NavLink to="/invitacion" className='linea_rosa' activeClassName='active'>Boda</NavLink>
                </li>
                <li role="none">
                  <NavLink to="/invitacion/ubicacion" className='linea_rosa' activeClassName='active'>Ubicación</NavLink>
                </li>
                <li role="none">
                  <NavLink to="/invitacion/regalos" className='linea_rosa' activeClassName='active'>Regalos</NavLink>
                </li>
              </ul> */}

              <ul className="menubar-navigation" role="menubar" aria-label="Mythical University">
            <li role="none">
              <NavLink to="/invitacion/info" className={`linea_rosa ${activeMenuItem === "/invitacion/info" ? 'active' : ''}`} activeClassName="active">Boda</NavLink>
            </li>
            <li role="none">
              <NavLink to="/invitacion/ubicacion" className={`linea_rosa ${activeMenuItem === "/invitacion/ubicacion" ? 'active' : ''}`} activeClassName="active">Ubicación</NavLink>
            </li>
            <li role="none">
              <NavLink to="/invitacion/regalos" className={`linea_rosa ${activeMenuItem === "/invitacion/regalos" ? 'active' : ''}`} activeClassName="active">Regalos</NavLink>
            </li>
          </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header