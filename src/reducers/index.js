import { combineReducers } from 'redux';
import repoList from './reducer_repoList';
import fetchData from './reducer_fetchData';


export default combineReducers({
  repoList,
  fetchData  
})