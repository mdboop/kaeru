
import React, { Component } from 'react';

import Main from '../components/Main';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      card: null,
      cardCreated: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'REQUEST_CARD' }, ({ payload: card }) => {
        console.log(card);
        this.setState({ card, cardCreated: true });
      });
    });
  }

  render() {
    const { card, cardCreated } = this.state;
    return (
      <Main
        handleClick={this.handleClick}
        card={card}
        cardCreated={cardCreated}
      />
    );
  }
}
