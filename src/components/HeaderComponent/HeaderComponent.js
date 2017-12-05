import React, { Component } from 'react';
import { Link } from 'react-router';

import './HeaderComponent.css';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="headerComponent">
        <div className="container">
         
          <Link 
            activeClassName="headerComponent__link_active"
            className="headerComponent__link" 
            to="/repoList">repoList
          </Link>
          
          <Link 
            activeClassName="headerComponent__link_active"
            className="headerComponent__link" 
            to="/favorits">favorits
          </Link>
          
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
