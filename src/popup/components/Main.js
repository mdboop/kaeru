import React, { PropTypes } from 'react';

import { genStandardFileName } from '../../utils/filenames';

console.log(genStandardFileName());

import './Main.scss';

const handleDownload = (url) => () => chrome.downloads.download({ url, filename: genStandardFileName() });

export default function Main(props) {
  const {
    url,
    handleRequestClick,
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
        <button disabled={!cardCreated} className="download-card" onClick={handleDownload(url)}>download!</button>
      </main>
      <footer>
        <p>Made with ❤️ by <a tabIndex="-1" href="https://github.com/mdboop">mdboop</a>.</p>
      </footer>
    </div>
  );
}

Main.propTypes = {
  url: PropTypes.string,
  cardCreated: PropTypes.bool,
  handleRequestClick: PropTypes.func,
};
