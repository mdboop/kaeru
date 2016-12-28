import React, { PropTypes } from 'react';

import { genStandardFileName } from '../../utils/filenames';

import './Main.scss';

import { createDownloadUrl } from '../../common/Download';
import { fromNullable } from '../../utils/functional-helpers';

import Cards from './Cards';

const handleDownload = (url) => () => chrome.downloads.download({ url, filename: genStandardFileName() });
const openTab = (url) => () => chrome.tabs.create({ url });

export default function Main(props) {
  const {
    cards,
    handleRequestClick,
    handleDeleteCard,
    handleClearCards,
  } = props;
  const cardsCreated = cards.length > 0;
  const url = fromNullable(cards.join('\n'))
    .fold(console.error, createDownloadUrl);

  return (
    <div className="main-container">
      <header>
        <h1>kaeru</h1><sup>alpha</sup>
      </header>
      <main>
        <Cards onClick={handleDeleteCard} cards={cards} />
        <div>
          <button tabIndex="-1" className="request-card" onClick={handleRequestClick}>make card</button>
          <button disabled={!cardsCreated} className="download-card" onClick={handleDownload(url)}>download</button>
        </div>
        <div>
          <button className="clear-cards" onClick={handleClearCards}>clear</button>
        </div>
      </main>
      <footer>
        <p>Made with ❤️ by <a onClick={openTab('https://github.com/mdboop')} tabIndex="-1" href="">mdboop</a>.</p>
      </footer>
    </div>
  );
}

Main.propTypes = {
  cards: PropTypes.array,
  handleRequestClick: PropTypes.func,
  handleDeleteCard: PropTypes.func,
  handleClearCards: PropTypes.func,
};
