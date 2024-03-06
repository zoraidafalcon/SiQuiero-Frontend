import InvitacionCard from '../../components/InvitacionCard/InvitacionCard'
import Header from '../../components/Header/Header'
import "./Invitacion.css";
import Footer from '../../components/Footer/Footer';
import Grid from "@mui/material/Grid";

function Invitacion() {
  
  return (
    <div className="web_boda relative">

<Header></Header>

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
              <p>Silvia</p>
              <p className='suma'>&</p>
              <p>Jesús</p>
            </div>

          </div>
        </div>
      </div>

      <div className="section_fecha">
        <div className="container">
        <div class="texto_inicio">
          <h2>¡Nos casamos!</h2>
          <p>Es un honor para nosotros invitarte a nuestro enlace, un día donde celebraremos
            el amor, la unión y la felicidad que compartimos. Estamos emocionados de compartir
            este momento tan especial contigo y tus seres queridos.</p>
          </div>
        

        <p className="save_date">Save the Date</p>

        <div className="fecha centrado">
          <div className="dia caja centrado animacion">
            <p>25</p>
            </div>

            <p>.</p>

          <div className="mes relative caja centrado animacion">
            <p className="letra animacion">Enero</p>
            <p className="numero animacion">01</p>
            </div>

            <p>.</p>

          <div className="anio caja centrado animacion">
              <p className="animacion">2025</p>
            </div>
        </div>

        </div>
      </div>

      <div className="section_fotos">
        <div className="contenedor">
      <Grid className="row_login row_regalos row_fotos" container spacing={2}>
          {/* regalo1 */}
        <Grid className="colm colm_regalo" item xs={4} md={4}>
        <div className="caja_regalo foto_1 animacion">
          <div className="padre_imagen relative gift-card">
            <div
              className="imagen regalo_forzado_1 absolute animacion"
            >
              <div className="filtro_imagen absolute animacion"></div>
            </div>
          </div>
        </div>

        </Grid>

{/* regalo2 */}
        <Grid className="colm colm_regalo" item xs={4} md={4}>
        <div className="caja_regalo foto_2 animacion">
          <div className="padre_imagen relative gift-card">
            <div
              className="imagen regalo_forzado_2 absolute animacion"
            >
              <div className="filtro_imagen absolute animacion"></div>
            </div>
          </div>
        </div>

        </Grid>

        {/* regalo2 */}
        <Grid className="colm colm_regalo" item xs={4} md={4}>
        <div className="caja_regalo foto_3 animacion">
          <div className="padre_imagen relative gift-card">
            <div
              className="imagen regalo_forzado_3 absolute animacion"
            >
              <div className="filtro_imagen absolute animacion"></div>
            </div>
          </div>
        </div>

        </Grid>

        </Grid>
        </div>
      </div>

    <Footer></Footer>
    </div>
  )
}

export default Invitacion