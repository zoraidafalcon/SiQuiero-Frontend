import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './GiftCard.css';
import { WeddingContext } from '../../Context/Wedding';
import { addFavoriteGift } from '../../services/gift';

const GiftCard = ( {gift} ) => {
  const {wedding} = useContext(WeddingContext)

  const handleRegalo= async()=> {
    console.log(gift)
    console.log(wedding)
    const result = await addFavoriteGift(gift.id, wedding.id)

  }
  
  return (
    <div className="gift-card">
      <h2>Name: {gift.name}</h2>
      <p>Category: {gift.category}</p>
      <p>Price: {gift.price}</p>
      <img src={gift.image} alt={gift.name} />
      <button onClick={handleRegalo}>Añadir regalo</button>
    </div>
  );
};

GiftCard.propTypes = {
  gift: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default GiftCard;
