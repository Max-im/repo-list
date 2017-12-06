import { 
  ADD_TO_FAVORITE, 
  DEL_FROM_FAVORITE, 
  SORT_FAV_BY_ID,
  SORT_FAV_BY_NAME } from '../constants';

import { stateData } from './reducer_fetchData';


export default ( state = [], action ) => {
  switch ( action.type ) {
    
    case ADD_TO_FAVORITE:
      const added = stateData.find(item => item.id === action.id)
      return [...state, added].sort((a, b) => a['name'] > b['name'] ? 1 : -1);

    case DEL_FROM_FAVORITE:
      const filtred = state.filter(item => item.id !== action.id)
        .sort((a, b) => a.name - b.name);
      return filtred;

    case SORT_FAV_BY_ID:
      const sortedId = action.arr.sort((a, b) => parseInt(a['id']) - parseInt(b['id']));
      return [...sortedId];

    case SORT_FAV_BY_NAME:
      const sortedName = action.arr.sort((a, b) => a['name'] > b['name'] ? 1 : -1);
      return [...sortedName];
    
    default:
      return state;
  }
}