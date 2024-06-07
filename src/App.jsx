import React, { Component } from 'react';
import Browser from './components/Browser.jsx';
import data from './Data.json';

class App extends Component {

  render() {
    return (
      <Browser data={data} />
    );
  }
}

export default App;
