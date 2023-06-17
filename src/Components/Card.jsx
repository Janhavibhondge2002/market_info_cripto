import React from 'react';
import './Card.css';

const Card = () => {
  const cardData = [
    {
      id: 1,
      heading: 'Card 1',
      image: 'https://example.com/image1.jpg',
      text1: 'Line 1 of Card 1',
      text2: 'Line 2 of Card 1',
    },
    {
      id: 2,
      heading: 'Card 2',
      image: 'https://example.com/image2.jpg',
      text1: 'Line 1 of Card 2',
      text2: 'Line 2 of Card 2',
    },
    // Add more card data as needed
  ];

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <h3 className="heading">{card.heading}</h3>
          <img src={card.image} alt={card.heading} className="image" />
          <div className="text-container">
            <p>{card.text1}</p>
            <p>{card.text2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
