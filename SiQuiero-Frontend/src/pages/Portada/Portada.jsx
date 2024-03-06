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
          <p>S</p>
        </div>
        <div>
          <p>Web de Boda</p>
          <h1>Silvia & Jesús</h1>
          
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
