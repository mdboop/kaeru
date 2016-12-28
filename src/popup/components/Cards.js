import React from 'react';

import './Cards.scss';

export default function Cards({ cards, onClick }) {
  return (
    <ul className="cards">
      {cards.map((card, i) => (
        <li key={i}>
          <span>{card.split(' ')[0]}</span>
          <button onClick={onClick(card.split(' ')[0])}>remove</button>
        </li>
      ))}
    </ul>
  );
}

Cards.propTypes = {
  cards: React.PropTypes.array,
  onClick: React.PropTypes.func,
};
