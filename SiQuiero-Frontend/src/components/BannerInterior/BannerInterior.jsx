import "./BannerInterior.css";
import React from 'react';

function BannerInterior() {

    return (
        <>
<div className="banner_interior relative">
        <div class="caja_magica_banner">
          <img src="/forma1.png" alt="" class="corte_cabecera animacion"/>

          </div>

          <div class="padre_imagen relative">
            <div class="imagen absolute"></div>
            <div class="filtro_color absolute"></div>
          </div>

          <div class="texto_banner centrado">
            <div class="container">
              <div class="nombres_pareja centrado">
                <p>Adf</p>
                <p class="suma">&amp;</p>
                <p>Dfg</p>
              </div>

              <p className='fecha_pareja'>25 de Enero de 2025</p>
            </div>
          </div>
        </div>
</>
        );
}

export default BannerInterior