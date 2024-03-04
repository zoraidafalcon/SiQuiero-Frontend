import React from 'react';
import PropTypes from 'prop-types';
import './GiftCard.css';

const GiftCard = ( {gift} ) => {
  console.log(gift)
  return (
    <div className="gift-card">
      <h2>Name: {gift.name}</h2>
      <p>Category: {gift.category}</p>
      <p>Price: {gift.price}</p>
      <img src={gift.image} alt={gift.name} />
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
