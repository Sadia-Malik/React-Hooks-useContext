// CardProvider.js
import React, { useState, createContext } from 'react';

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState(null);

  const addCard = (data) => {
    setCardData(data);
  };

  return <CardContext.Provider value={{ cardData, addCard }}>{children}</CardContext.Provider>;
};

export default CardProvider;
