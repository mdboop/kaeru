
import React, { Component } from 'react';

import Main from '../components/Main';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: {},
    };
  }

  render() {
    const { cards } = this.state;
    return (
      <Main
        cards={cards}
      />
    );
  }
}
