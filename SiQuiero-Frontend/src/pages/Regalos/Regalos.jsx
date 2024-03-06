
import React from 'react'
import Header from '../../components/Header/Header'
import BannerInterior from '../../components/BannerInterior/BannerInterior'
import Footer from '../../components/Footer/Footer';

import Grid from "@mui/material/Grid";

// import GiftCard from '../../components/GiftCard/GiftCard'
import { Link } from 'react-router-dom'
import './Regalos.css'


function pageRegalos() {

    return (
      <div className="web_boda page_regalos relative">
  
       <Header></Header>

       <BannerInterior></BannerInterior>

      <div className="section_regalos">
        <div className="container">

        <div className="texto_inicio">
            <h2>¡Lista de regalos!</h2>

            <p>Para nosotros el regalo más importante es celebrar este día juntos.
              Si prefieres hacernos un regalo, aquí tienes nuestra lista de deseos.</p> 

          </div>
        

        <Grid className="row_login row_regalos" container spacing={2}>
          {/* regalo1 */}
        <Grid className="colm colm_regalo" item xs={4} md={4}>
        <div className="caja_regalo">
          <div className="padre_imagen relative gift-card">
            <div
              className="imagen regalo_forzado_1 absolute animacion"
            >
              <div className="filtro_imagen absolute animacion"></div>
            </div>

            <div className="texto_imagen absolute animacion">
              <div className="padding ">
                <div className="nombre_categoria">
                  <p>Experiencias</p>
                  <p className="nombre_actividad">Cena romántica</p>
                </div>
              </div>
            </div>

            <div className="texto_imagen_hover absolute animacion">
              <div className="padding ">
                <div className="nombre_categoria">
                  <p>Experiencias</p>
                  <p className="nombre_actividad">Cena romántica</p>
                </div>

                <div className="descripcion_precio">
                  <p className="limitar_3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, rhoncus non id sagittis ultrices morbi, volutpat porttitor quam mauris interdum tortor aliquet, risus elementum hendrerit litora accumsan. Cubilia quis tempor curae platea mi pulvinar bibendum sed nec, augue eros egestas pellentesque nisl quam iaculis pharetra potenti, fusce vel dis aliquet convallis parturient enim litora.{" "}
                  </p>
                  <p className="precio">100 €</p>
                  <a href="#">
                    <button class="hvr_horizontal">Regalar</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        </Grid>

        {/* regalo2 */}
        <Grid className="colm colm_regalo" item xs={4} md={4}>
        <div className="caja_regalo">
          <div className="padre_imagen relative gift-card">
            <div
              className="imagen regalo_forzado_2 absolute animacion"
            >
              <div className="filtro_imagen absolute animacion"></div>
            </div>

            <div className="texto_imagen  absolute animacion">
              <div className="padding ">
                <div className="nombre_categoria">
                  <p>Servicios</p>
                  <p className="nombre_actividad">Maquilladora Boda</p>
                </div>
              </div>
            </div>

            <div className="texto_imagen_hover absolute animacion">
              <div className="padding ">
                <div className="nombre_categoria">
                  <p>Servicios</p>
                  <p className="nombre_actividad">Maquilladora Boda</p>
                </div>

                <div className="descripcion_precio">
                  <p className="limitar_3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, rhoncus non id sagittis ultrices morbi, volutpat porttitor quam mauris interdum tortor aliquet, risus elementum hendrerit litora accumsan. Cubilia quis tempor curae platea mi pulvinar bibendum sed nec, augue eros egestas pellentesque nisl quam iaculis pharetra potenti, fusce vel dis aliquet convallis parturient enim litora.{" "}
                  </p>
                  <p className="precio">350 €</p>
                  <a href="#">
                    <button class="hvr_horizontal">Regalar</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        </Grid>

        {/* regalo3 */}
        <Grid className="colm colm_regalo" item xs={4} md={4}>
        <div className="caja_regalo">
          <div className="padre_imagen relative gift-card">
            <div
              className="imagen regalo_forzado_3 absolute animacion"
            >
              <div className="filtro_imagen absolute animacion"></div>
            </div>


            <div className="texto_imagen absolute animacion">
              <div className="padding ">
                <div className="nombre_categoria">
                  <p>Experiencias</p>
                  <p className="nombre_actividad">Bajo las estrellas</p>
                </div>
              </div>
            </div>

            <div className="texto_imagen_hover absolute animacion">
              <div className="padding ">
                <div className="nombre_categoria">
                  <p>Experiencias</p>
                  <p className="nombre_actividad">Bajo las estrellas</p>
                </div>

                <div className="descripcion_precio">
                  <p className="limitar_3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, rhoncus non id sagittis ultrices morbi, volutpat porttitor quam mauris interdum tortor aliquet, risus elementum hendrerit litora accumsan. Cubilia quis tempor curae platea mi pulvinar bibendum sed nec, augue eros egestas pellentesque nisl quam iaculis pharetra potenti, fusce vel dis aliquet convallis parturient enim litora.{" "}
                  </p>
                  <p className="precio">180 €</p>
                  <a href="#">
                    <button class="hvr_horizontal">Regalar</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        </Grid>

        </Grid>
        </div>



      </div>

      <Footer></Footer>
      </div>


      // </div>

    )
  }

      export default pageRegalos
