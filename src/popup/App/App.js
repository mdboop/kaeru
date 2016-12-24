
import React, { Component } from 'react';

import Main from '../components/Main';

import './reset.scss';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      card: null,
      cardCreated: false,
    };

    this.handleRequestClick = this.handleRequestClick.bind(this);
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
  }

  handleRequestClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'REQUEST_CARD' }, ({ payload: card }) => {
        this.setState({ card, cardCreated: true });
      });
    });
  }

  handleDownloadClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'DOWNLOAD_CARD', payload: this.state.card });
    });
  }

  render() {
    const { cardCreated } = this.state;
    return (
      <Main
        handleRequestClick={this.handleRequestClick}
        handleDownloadClick={this.handleDownloadClick}
        cardCreated={cardCreated}
      />
    );
  }
}
