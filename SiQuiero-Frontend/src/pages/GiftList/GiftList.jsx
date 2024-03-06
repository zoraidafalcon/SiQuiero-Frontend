import { useContext } from 'react'
import Header from '../../components/Header/Header';
import GiftList from '../../components/GiftList/GiftList'
import { Link } from 'react-router-dom';
import PortadaCard from '../../components/PortadaCard/PortadaCard';
import BannerInterior from '../../components/BannerInterior/BannerInterior';

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
          <p>S</p>
        </div>

        <div>

          <p>Web de Boda</p>
          <h1>Silvia & Jesús</h1>

          < PortadaCard /> 
        </div>
      </div>


      <div className="section_page_regalos">

        <BannerInterior></BannerInterior>


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