import React, { useState, useEffect} from 'react'
import "./GiftList.css";
import { Link , Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import GiftCard from '../../components/GiftCard/GiftCard'
import { getGift } from '../../services/gift'
import { Route } from 'react-router-dom'

function GiftList() {
   
    const [gifts, setGifts] = useState([])
    useEffect(()=>{
        const getGifts = async() =>{
            const {result} = await getGift()
            console.log(result)
            setGifts(result)
        }
        getGifts()
    }, [])

    const giftList =() =>{
        const result = gifts.map((gift) =>{
            return (
            <>
                <GiftCard gift={gift}/>
            </>
            )
        })
        return result
    }
    
    return(
    <>
        <div className="row_lista_regalos">
            {giftList()}
        </div>
    </>
      

        // <Card sx={{ maxWidth: '500px' }}>
        // <CardHeader title="Mis regalos" />
        // <CardContent>
        // <div>
        //   <div>
        //     {giftList()}
        //   </div>
        // </div>
        // </CardContent>
        //     <Divider />
        // <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        //   <Link to='/invitacion'>
        //     <button >Ver Invitación</button>
        //   </Link >
        // </CardActions>
        // </Card>

    )
}

export default GiftList