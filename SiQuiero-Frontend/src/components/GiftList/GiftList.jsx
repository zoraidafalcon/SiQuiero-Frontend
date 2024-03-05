import React, { useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import GiftCard from '../../components/GiftCard/GiftCard'
import { getGift } from '../../services/gift'
import "./GiftList.css";

function GiftList() {
    const navigate = useNavigate()
    const [gifts, setGifts] = useState([])
    
    useEffect(()=>{
        const getGifts = async() =>{
            const {result} = await getGift()
            setGifts(result)
        }
        getGifts()
    }, [])
    const giftList =() =>{
        const result = gifts.map((gift) =>{
            return <GiftCard gift={gift}/>
        })
        return result
    }
    
    //navigate('/invitacion')
    return(
<>
<div className="row_lista_regalos">
{giftList()}
</div>

</>
      
    )
}

export default GiftList