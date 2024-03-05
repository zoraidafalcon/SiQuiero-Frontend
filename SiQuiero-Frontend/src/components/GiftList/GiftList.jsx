import React, { useState, useEffect} from 'react'

import "./GiftList.css";

import { Link , Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import GiftCard from '../../components/GiftCard/GiftCard'
import { getGift } from '../../services/gift'
import { Route } from 'react-router-dom'
import Grid from "@mui/material/Grid";


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
{/* <div className="row_lista_regalos">
{giftList()}
</div> */}
 <div className="lista_regalos relative caja">
<Grid className="row_login row_regalos" container spacing={2}>
        {/* 1º fila */}
        {giftList()}
        {/* imagen 4 */}
        {/* <Grid className="colm" item xs={3} md={3}>
       
        </Grid> */}

        {/* <Grid className="colm" item xs={3} md={3}>
          <div className="padre_imagen relative">
            <div className="imagen galeria4"></div>
            <div className="filtro_color absolute"></div>
          </div>
        </Grid> */}

        {/* imagen 5 */}
        {/* <Grid className="colm" item xs={3} md={3}>
          <div className="padre_imagen relative">
            <div className="imagen galeria5"></div>
            <div className="filtro_color absolute"></div>
          </div>
        </Grid> */}

        {/* <Grid className="colm" item xs={3} md={3}>
          <div className="foto finquierda">
            <div className="padre_imagen relative">
              <div className="imagen galeria6"></div>
              <div className="filtro_color absolute"></div>
            </div>
            </div>
        </Grid> */}
      </Grid>
      </div>
</>
      


        

    )
}

export default GiftList