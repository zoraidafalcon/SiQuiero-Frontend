import React from "react";
import Header from "../../components/Header/Header";
import BannerInterior from "../../components/BannerInterior/BannerInterior";
import { Link } from "react-router-dom";
import "./Ubicacion.css";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer/Footer";

function UbicacionCard() {
  return (
    <div className="web_boda page_ubicacion relative">
      <Header></Header>

      <BannerInterior></BannerInterior>

      <div className="ubicacion_boda">
        <div className="container">
          <Grid className="row_login row_regalos row_ubicacion" container spacing={2}>
            <Grid className="colm colm_regalo" item xs={6} md={6}>
              <div className="texto_ubicaion">
                <div className="padding">
                  <h2>Lugar del enlace</h2>

                  <p>
                    Estamos encantados de invitarlos a celebrar nuestro amor en
                    la hermosa Finca Los Olivos, ubicada en Agüimes. Este lugar
                    especial será el escenario donde uniremos nuestras vidas en
                    matrimonio.
                  </p>

                  <p>
                    La ceremonia tendrá lugar el 15 de Enero de 2025, rodeados
                    de nuestros seres queridos y amigos más cercanos. Después de
                    la ceremonia, nos dirigiremos a la recepción donde
                    continuaremos celebrando este momento tan especial con
                    deliciosa comida, música y baile hasta altas horas de la
                    noche.
                  </p>
                </div>
              </div>
            </Grid>

            {/* regalo2 */}
            <Grid className="colm colm_regalo" item xs={6} md={6}>
              <div className="padre_cuadritos_monos">
                <div className="cuadro_servicio animacion">
                  <div className="padding">
                    <div className="caja_imagen_servicios relative centrado">
                      <img
                      src="/cita-romantica.png"
                       
                        alt=""
                        className="icono_servicios"
                      />
                    </div>
                    <div>
                    <p className="titulo">Fecha</p>
                    <p>15 de Enero de 2025</p>
                    </div>
                  </div>
                </div>

                <div className="cuadro_servicio animacion">
                  <div className="padding">
                    <div className="caja_imagen_servicios relative centrado">
                      <img
                         src="/anillo-de-bodas.png"
                        alt=""
                        className="icono_servicios"
                      />
                    </div>
                    <div>
                    <p className="titulo">Ubicación</p>
                    <p>Finca Los Olivos</p>
                    </div>
                  </div>
                </div>

                <div className="cuadro_servicio animacion">
                  <div className="padding">
                    <div className="caja_imagen_servicios relative centrado">
                      <img
                        src="/marcador-de-posicio.png"
                        alt=""
                        className="icono_servicios"
                      />
                    </div>
                    <div>
                    <p className="titulo">Dirección</p>
                    <p>Cam. del conde, 304 Agüimes</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="mapa_boda">
        <div className="imagen"></div>
        <div class="filtro_color absolute"></div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default UbicacionCard;
