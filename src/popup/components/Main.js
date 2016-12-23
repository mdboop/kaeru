import React, { PropTypes } from 'react';

export default function Main({ handleClick, card, cardCreated }) {

  const download = cardCreated ? <a href={card}>download!</a> : null;
  return (
    <div>
      <h1>kaeru</h1>
      <div>
        <div>{cardCreated ? 'card created!' : ''}</div>
        <button onClick={handleClick}>make card</button>
        {download}
      </div>
    </div>
  );
}

Main.propTypes = {
  cardCreated: PropTypes.bool,
  card: PropTypes.object,
  handleClick: PropTypes.func,
};
