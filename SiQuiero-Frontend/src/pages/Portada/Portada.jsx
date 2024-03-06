import React from "react";
import PortadaCard from "../../components/PortadaCard/PortadaCard";
import Invitacion from "../Invitacion/Invitacion";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import React, { useEffect } from 'react';
import "./Portada.css";

function Portada() {
 
  return (
    <div className="gestion relative caja">
      <div className="header_portada centrado">
        <Link to="/portada">
          <div className="">
            <img src="logo2.png" alt="" />
          </div>
        </Link>
      </div>
      <div className="lateral centrado">
        <div className="bola_usuario centrado">
          <p>A</p>
        </div>
        <div>
          <p>Web de Boda</p>
          <h1>Silvia & Jesús</h1>

          {/* <div className="menu_gestion">
            <nav aria-label="menu_gestion_web">
              <ul
                className="menubar-navigation"
                role="menubar"
                aria-label="Mythical University"
              >
                <li role="none" className="active">
                  <a role="menuitem" className=" linea_roja">
                    Vista Web
                  </a>
                </li>

                <li role="none">
                  <a role="menuitem" className="linea_roja">
                    Diseño
                  </a>
                </li>

                <li role="none">
                  <a role="menuitem" className="linea_roja">
                    Páginas
                  </a>
                </li>

                <li role="none">
                  <a role="menuitem" className="linea_roja">
                    Configuración
                  </a>
                </li>

                <li role="none">
                  <a role="menuitem" href="regalos" className="linea_roja">
                    Lista de regalos
                  </a>
                </li>

                <li role="none">
                  <a role="menuitem" className="linea_roja">
                    Actividad
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}

{/* <div className="menu_gestion">
      <nav aria-label="menu_gestion_web">
        <ul
          className="menubar-navigation"
          role="menubar"
          aria-label="Mythical University"
        >
          <li role="none">
            <NavLink to="/portada" className="linea_roja" activeClassName="active" role="menuitem">Vista Web</NavLink>
          </li>
          <li role="none">
            <NavLink to="#" className="linea_roja" activeClassName="active" role="menuitem">Diseño</NavLink>
          </li>
          <li role="none">
            <NavLink to="#" className="linea_roja" activeClassName="active" role="menuitem">Páginas</NavLink>
          </li>
          <li role="none">
            <NavLink to="/pasos" className="linea_roja" activeClassName="active" role="menuitem">Configuración</NavLink>
          </li>
          <li role="none">
            <NavLink to="/regalos" className="linea_roja" activeClassName="active" role="menuitem">Lista de regalos</NavLink>
          </li>
          <li role="none">
            <NavLink to="#" className="linea_roja" activeClassName="active" role="menuitem">Actividad</NavLink>
          </li>
        </ul>
      </nav>
    </div> */}

          < PortadaCard />

        </div>
      </div>
      <div className="simulador_web_boda">
        <Invitacion></Invitacion>
      </div>
    </div>
  );
}

export default Portada;
