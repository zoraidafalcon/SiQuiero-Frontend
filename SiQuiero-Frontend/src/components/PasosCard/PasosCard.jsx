
import React, { useState, useEffect, useContext} from 'react'
import {wedding} from '../../services/wedding'
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import { useNavigate} from 'react-router-dom'

import "./PasosCard.css"
import { WeddingContext } from '../../Context/Wedding'


import "./PasosCard.css";

function PasosCard() {
  const navigate = useNavigate();
  const [persona1, setPersona1] = useState("");
  const [persona2, setPersona2] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  // const [gifts, setGifts] = useState([])

  const onWedding = async () => {
    const result = await wedding({ persona1, persona2, date, place });


    //navigate("/invitacion");
  };

    const {setWedding} = useContext(WeddingContext)
    const onWedding = async () => {
    const result = await wedding({ persona1, persona2, date, place })
    setWedding(result.result)
    navigate('/regalos')
    }


  //   useEffect(()=>{
  //     const getGifts = async() =>{
  //       const {result} = await getGift()
  //       setGifts(result)
  //     }
  //     getGifts()
  //   }, [])
  //   const giftList =() =>{
  //     const result = gifts.map((gift) =>{
  //       return <GiftCard gift={gift}/>
  //   })
  //   return result
  // }

  return (
    <Card sx={{ maxWidth: "500px" }}>
      <CardContent>
      <div className="nombre_parejas relative centrado">
        <TextField
          onChange={(e) => setPersona1(e.target.value)}
          label="Tu nombre"
          variant="standard"
          fullWidth={true}
          sx={{ marginBottom: "20px" }}
        />
        <div className="union centrado">
          <p>&</p>
        </div>
        <TextField
          onChange={(e) => setPersona2(e.target.value)}
          label="Nombre de tu pareja"
          variant="standard"
          fullWidth={true}
          sx={{ marginBottom: "20px" }}
        />

      <TextField
        onChange={(e) => setDate(e.target.value)}
        label="Fecha de la Boda (dd/mm/aaaa)"
        variant="standard"
        fullWidth={true}
        sx={{ marginBottom: "20px" }}
      />
      <TextField
        onChange={(e) => setPlace(e.target.value)}
        label="Lugar del enlace"
        variant="standard"
        fullWidth={true}
        sx={{ marginBottom: "20px" }}
      />


      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <Button onClick={onWedding} color="success">
            crear invitacion
          </Button> */}

        <button onClick={onWedding} className="hvr_horizontal">
          Siguiente
        </button>
      </CardActions>
      

      </CardContent>
    </Card>
  );
}

export default PasosCard;
