import React, { Component } from 'react';
import './RepoList.css';

import ListComponent from '../ListComponent/ListComponent';

const nnn = [{
  author: "Author",
  name: "repoName",
  link: "link",
  thumbnail: 'img',
  descr: 'descr'
}];

class RepoList extends Component {
  render() {
    const addToFavorite = ()=>{
      console.log('click')
    }
    return (
      <div className="app">
        <div className="container">
          <h2>Repo List</h2>
          <ul>
            <ListComponent data={nnn} clickHandler={addToFavorite} />
          </ul>
        </div>
      </div>
    );
  }
}

export default RepoList;
