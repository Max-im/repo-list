import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRedirect, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';



import App from './components/App/App';
import RepoList from './components/RepoList/RepoList';
import Favorits from './components/Favorits/Favorits';
import Single from './components/Single/Single';
import NotFound from './components/NotFound/NotFound';


const store = createStore(reducer);

// store.subscribe( () => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }> 
      <Route path="/" component={ App }>
        <IndexRedirect to="repoList" />
        <Route path="/repoList" component={ RepoList } />
        <Route path='/repoList/single/:id' component={Single} />
        <Route path="/favorits" component={ Favorits } />
        <Route path="/**" component={ NotFound } />
      </Route>
    </Router>
  </Provider>,
  
  document.getElementById('root'));
registerServiceWorker();
