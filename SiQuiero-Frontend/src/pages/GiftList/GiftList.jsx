import { useContext } from 'react'
import Header from '../../components/Header/Header';
import GiftList from '../../components/GiftList/GiftList'
import { Link } from 'react-router-dom';
import PortadaCard from '../../components/PortadaCard/PortadaCard';

import "./GiftList.css";
import { WeddingContext } from '../../Context/Wedding'


function muestraGiftList() {

  return (

    <div className="pagina_lista_regalos">

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
          <h1>Asd & Dfg</h1>

          <div className="menu_gestion">

            <nav aria-label="menu_gestion_web">
              <ul className="menubar-navigation" role="menubar" aria-label="Mythical University">
                <li role="none">
                  <a role="menuitem" href='/portada' className=" linea_roja" >Vista Web</a>
                </li>

                <li role="none">
                  <a role="menuitem" className="linea_roja">Diseño</a>
                </li>

                <li role="none">
                  <a role="menuitem" className="linea_roja">Páginas</a>
                </li>

                <li role="none">
                  <a role="menuitem" className="linea_roja">Configuración</a>
                </li>

                <li role="none" className='active' >
                  {/*<Link to ="/regalos">*/}
                  <a role="menuitem" href='regalos' className="linea_roja">Lista de regalos</a>
                  {/* </Link> */}
                </li>

                <li role="none">
                  <a role="menuitem" className="linea_roja">Actividad</a>
                </li>

              </ul>
            </nav>

          </div>

          < PortadaCard />
        </div>
      </div>


      <div className="section_page_regalos">

        <div className="banner_regalos relative">
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



        <div className="container">

          <div className="texto_inicio">
            <h2>¡Lista de regalos!</h2>

            {/* <p> Si quieres colabora con nuestra lista de regalos.
Aunque para nosotros el regalo más importante es celebrar este día jusntos.</p> */}

<p>Asegúrate de recibir los regalos que realmente deseas. Confecciona tu propia lista
  de regalos y haz que cada regalo sea especial.</p>
          </div>

          <GiftList></GiftList>
        </div>

      </div>
    </div>

  )
}

export default muestraGiftList