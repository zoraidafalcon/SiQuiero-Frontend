import React from 'react'
import "./InvitacionCard.css";

function InvitacionCard() {
  return (
    <div className="web_boda relative">

      <div className="header_web_boda">
        <div className="container">

          <div className="iniciales centrado">
            <p>A</p>
            <p className='suma'>+</p>
            <p>D</p>
          </div>

        </div>

      </div>

      <div className="banner relative">
        <div className="caja_magica_banner">
          <img src="/forma1.png" alt="" className="corte_cabecera animacion"></img>
        </div>

        <div className="padre_imagen relative">
          <div className="imagen absolute"></div>
          <div className="filtro_color absolute"></div>
        </div>

        <div className="texto_banner centrado">
          <div className="container">

            <div className="nombres_pareja centrado">
              <p>Adf</p>
              <p className='suma'>&</p>
              <p>Dfg</p>
            </div>

          </div>
        </div>
      </div>

      <div className="fecha_boda">
        
      </div>


    </div>

  )
}

export default InvitacionCard

