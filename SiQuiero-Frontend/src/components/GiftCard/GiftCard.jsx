
// import PropTypes from 'prop-types';
import "./GiftCard.css";
import React, { useContext } from 'react';
import { WeddingContext } from '../../Context/Wedding';
import { addFavoriteGift } from '../../services/gift';


function GiftCard({ gift }) {
  // const GiftCard = ( {gift} ) => {
  //   console.log(gift)
  // return (
  //   <div className="gift-card">
  //     <h2>Name: {gift.name}</h2>
  //     <p>Category: {gift.category}</p>
  //     <p>Price: {gift.price}</p>
  //     <img src={gift.image} alt={gift.name} />
  //   </div>
  // );

  // GiftCard.propTypes = {
  //     gift: PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     category: PropTypes.string.isRequired,
  //     price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  //     image: PropTypes.string.isRequired,
  //   }),
  // };
  
  const GiftCard = ( {gift} ) => {
  const {wedding} = useContext(WeddingContext)

  const handleRegalo= async()=> {
    console.log(gift)
    console.log(wedding)
    const result = await addFavoriteGift(gift.id, wedding.id)

  }

  return (
    <>
      <div className="col-md-4">
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
                    Why We Love It: Unbelievable comfort without overheating,
                    this cozy comforter is perfect for hot sleepers! However you
                    sleep, they’ve got a comforter (new and improved, may we
                    add) to match your needs. Snuggle up to varied levels of
                    warmth and construction, each tucked within their
                    ultra-soft, 100% long staple cotton shell.{" "}
                  </p>
                  <p className="precio">{gift.price} €</p>

                  <a href="#">
                    <button class="hvr_horizontal">Añadir</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>

  
  );
}

export default GiftCard;
