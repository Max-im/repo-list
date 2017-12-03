import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRedirect, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


import App from './components/App/App';
import RepoList from './components/RepoList/RepoList';
import Favorits from './components/Favorits/Favorits';
import MoreInfo from './components/MoreInfo/MoreInfo';



ReactDOM.render(

  <Router history={ hashHistory }> 
    <Route path="/" component={ App }>
      <IndexRedirect to="repoList" />
      <Route path="/repoList" component={ RepoList } />
      <Route path="/favorits" component={ Favorits } />
      <Route path="/moreInfo" component={ MoreInfo } />
    </Route>
  </Router>,
  
  document.getElementById('root'));
registerServiceWorker();
