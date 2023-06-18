// AddCard.js
import React, { useState, useContext } from 'react';
import { CardContext } from './CardProvider';

const AddCard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { addCard } = useContext(CardContext);

  const handleAddCard = () => {
    const newCardData = {
      title,
      description,
    };

    addCard(newCardData);
  };

  return (
    <div className='p-0  '>

      <input  className=" mb-3  form-control " type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input  className="form-control mb-3 " type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button className='btn btn-primary' onClick={handleAddCard}>Add Card</button>
    </div>
  );
};

export default AddCard;
