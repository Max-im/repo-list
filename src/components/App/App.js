import React, { Component } from 'react';
import './App.css';

import HeaderComponent from '../HeaderComponent/HeaderComponent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderComponent />
        <main className="main">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
