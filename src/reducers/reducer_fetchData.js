import { 
  ADD_TO_FAVORITE, 
  DEL_FROM_FAVORITE, 
  FETCH_DATA,
  SORT_BY_ID,
  SORT_BY_NAME } from '../constants';


// console.log(JSON.parse(localStorage.getItem('repoList')))
export let stateData = [];

const arrData = ( state = stateData, action ) => {
  if(JSON.parse(localStorage.getItem('repoList'))){
    state = JSON.parse(localStorage.getItem('repoList')).fetchData;
  }
  switch ( action.type ) {
    case FETCH_DATA:
      stateData.push(...action.data);
      if(JSON.parse(localStorage.getItem('repoList'))){
        return state;
      }
      return action.data;

    case ADD_TO_FAVORITE:
      const filtred = state.filter(item => item.id !== action.id);
      return filtred;

    case DEL_FROM_FAVORITE:
      const added = stateData.find(item => item.id === action.id);
      return [...state, added].sort((a, b) => a['name'] > b['name'] ? 1 : -1);

    case SORT_BY_ID:
      const sortedId = action.arr.sort((a, b) => parseInt(a['id'],10) - parseInt(b['id'],10));
      return [...sortedId];

    case SORT_BY_NAME:
      const sortedByName = action.arr.sort((a, b) => a['name'] > b['name'] ? 1 : -1);
      return [...sortedByName];
    
    default:
      return state;
  }
}


export default arrData;