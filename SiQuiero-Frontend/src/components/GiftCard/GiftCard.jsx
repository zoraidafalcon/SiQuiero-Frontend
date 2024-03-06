
import "./GiftCard.css";
import React, { useContext } from 'react';
import { WeddingContext } from '../../Context/Wedding';
import { addFavoriteGift } from '../../services/gift';
import Grid from "@mui/material/Grid";

function GiftCard({ gift }) {
  
 
  const {wedding} = useContext(WeddingContext)

  const handleRegalo= async()=> {
   console.log(wedding)
    const result = await addFavoriteGift(gift.id, wedding.id)

  }


  return (
    <>
      {/* <div className="col-md-4"> */}
      <Grid className="colm colm_regalo" item xs={4} md={4}>
        <div className="caja_regalo">
          <div className="padre_imagen relative gift-card">
            <div
              className="imagen absolute animacion"
              style={{ backgroundImage: `url(${gift.image})` }}
              alt={gift.name}
            >
              <div className="filtro_imagen absolute animacion"></div>
            </div>

            <div className="texto_imagen absolute animacion">
              <div className="padding ">
                <div className="nombre_categoria">
                  <p>{gift.category}</p>
                  <p className="nombre_actividad">{gift.name}</p>
                </div>
              </div>
            </div>

            <div className="texto_imagen_hover absolute animacion">
              <div className="padding ">
                <div className="nombre_categoria">
                  <p>{gift.category}</p>
                  <p className="nombre_actividad">{gift.name}</p>
                </div>

                <div className="descripcion_precio">
                  <p className="limitar_3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, rhoncus non id sagittis ultrices morbi, volutpat porttitor quam mauris interdum tortor aliquet, risus elementum hendrerit litora accumsan. Cubilia quis tempor curae platea mi pulvinar bibendum sed nec, augue eros egestas pellentesque nisl quam iaculis pharetra potenti, fusce vel dis aliquet convallis parturient enim litora.{" "}
                  </p>
                  <p className="precio">{gift.price} €</p>
                  <a href="#">
                    <button class="hvr_horizontal" onClick={handleRegalo}>Añadir</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        </Grid>
        {/* </div> */}
    </>
  );
}

export default GiftCard
