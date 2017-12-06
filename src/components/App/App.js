import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchData } from '../../actions';

import HeaderComponent from '../HeaderComponent/HeaderComponent';

class App extends Component {
  
  componentDidMount(){
      const target = 'defunkt';
      const url = `https://api.github.com/users/${target}/repos`;
      fetch(url, {method: 'GET'})
        .then(raw => raw.json())
        .then(json => this.props.fetchData(json));
  }

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


export default connect(null, { fetchData })(App);
