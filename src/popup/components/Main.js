import React, { PropTypes } from 'react';

import './Main.scss';

export default function Main(props) {
  const {
    handleRequestClick,
    handleDownloadClick,
    cardCreated,
  } = props;

  return (
    <div className="main-container">
      <header>
        <h1>kaeru</h1>
      </header>
      <main>
        <p className="message">{cardCreated ? 'card created!' : ''}</p>
        <button tabIndex="-1" className="request-card" onClick={handleRequestClick}>make card</button>
        <button disabled={!cardCreated} className="download-card" onClick={handleDownloadClick}>download!</button>
      </main>
      <footer>
        <p>Made with ❤️ by <a tabIndex="-1" href="https://github.com/mdboop">mdboop</a>.</p>
      </footer>
    </div>
  );
}

Main.propTypes = {
  cardCreated: PropTypes.bool,
  handleRequestClick: PropTypes.func,
  handleDownloadClick: PropTypes.func,
};
