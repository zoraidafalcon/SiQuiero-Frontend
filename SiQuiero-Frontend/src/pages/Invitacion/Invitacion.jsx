import InvitacionCard from '../../components/InvitacionCard/InvitacionCard'
import Header from '../../components/Header/Header'
import "./Invitacion.css";

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
              <p>Adf</p>
              <p className='suma'>&</p>
              <p>Dfg</p>
            </div>

          </div>
        </div>
      </div>

    <InvitacionCard/>
    </div>
  )
}

export default Invitacion