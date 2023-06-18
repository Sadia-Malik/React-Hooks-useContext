// CardDisplay.js
import React, { useContext } from 'react';
import { CardContext } from './CardProvider';

const CardDisplay = () => {
  const { cardData } = useContext(CardContext);

  return (
    <div>
      <h2>{cardData ? cardData.title : 'No card added yet.'}</h2>
      <p>{cardData ? cardData.description : ''}</p>
    </div>
  );
};

export default CardDisplay;
