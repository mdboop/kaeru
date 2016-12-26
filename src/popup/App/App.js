
import React, { Component } from 'react';

import { tryCatch } from '../../utils/functional-helpers';

import Main from '../components/Main';

import './reset.scss';
import './App.scss';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };

    this.handleRequestClick = this.handleRequestClick.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  componentDidMount() {
    tryCatch(() => JSON.parse(window.localStorage.kaeruCards))
      .fold(
        () => this.setState({ cards: [] }),
        (cards) => this.setState({ cards })
      );
  }

  componentWillUnmount() {
    window.localStorage.kaeruCards = JSON.stringify(this.state.cards);
  }

  handleRequestClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'REQUEST_CARD' }, ({ payload: card }) => {
        this.setState({ cards: this.state.cards.concat([card]) });
        window.localStorage.kaeruCards = JSON.stringify(this.state.cards);
      });
    });
  }

  handleDeleteCard(clickedCard) {
    return () => this.setState({
      cards: this.state.cards.filter(card => card.split(' ')[0] !== clickedCard),
    });
  }

  render() {
    const { cards } = this.state;
    return (
      <Main
        cards={cards}
        handleRequestClick={this.handleRequestClick}
        handleDeleteCard={this.handleDeleteCard}
      />
    );
  }
}
