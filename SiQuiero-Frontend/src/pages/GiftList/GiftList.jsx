import { useContext } from 'react'
import GiftListCard from '../../components/GiftList/GiftList'

import "./GiftList.css";
import { WeddingContext } from '../../Context/Wedding'


function GiftList() {
 
  return (

    <div className="pagina_lista_regalos">
      <div className="container">
        
        <GiftListCard/>

      </div>
    </div>

  )
}

export default GiftList