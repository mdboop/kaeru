
import React, { Component } from 'react';

import { createDownloadUrl } from '../../common/Download';
import { fromNullable } from '../../utils/functional-helpers';

import Main from '../components/Main';

import './reset.scss';
import './App.scss';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      card: null,
      url: null,
      cardCreated: false,
    };

    this.handleRequestClick = this.handleRequestClick.bind(this);
  }

  handleRequestClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'REQUEST_CARD' }, ({ payload: card }) => {
        const url = fromNullable(card)
        .fold(() => console.log('`payload` was not defined in downloadCard message request'), createDownloadUrl);

        this.setState({ card, cardCreated: true, url });
      });
    });
  }

  render() {
    const { cardCreated } = this.state;
    return (
      <Main
        url={this.state.url}
        handleRequestClick={this.handleRequestClick}
        cardCreated={cardCreated}
      />
    );
  }
}
