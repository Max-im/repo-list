import React, { Component } from 'react';
import './Favorits.css';

import ListComponent from '../ListComponent/ListComponent';

const nnn = [{
  author: "Author",
  name: "repoName",
  link: "link",
  thumbnail: 'img',
  descr: 'descr'
}];

class Favorits extends Component {
  render() {
    const removeFormFavorite = () => {
      console.log('remove');
    }
    
    return (
      <div className="favorits">
        <div className="container">
          <h2>Repo List</h2>
          <ul>
            <ListComponent data={nnn} clickHandler={removeFormFavorite} />
          </ul>
        </div>
      </div>
    );
  }
}

export default Favorits;
