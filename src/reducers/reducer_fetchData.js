import { 
  ADD_TO_FAVORITE, 
  DEL_FROM_FAVORITE, 
  FETCH_DATA,
  SORT_BY_ID,
  SORT_BY_NAME } from '../constants';

export let stateData = [];

export default ( state = stateData, action ) => {
  switch ( action.type ) {
    
    case FETCH_DATA:
      stateData.push(...action.data);
      return action.data;

    case ADD_TO_FAVORITE:
      const filtred = state.filter(item => item.id !== action.id)
      return filtred;

    case DEL_FROM_FAVORITE:
      const added = stateData.find(item => item.id === action.id);
      return [...state, added].sort((a, b) => a['name'] > b['name'] ? 1 : -1);

    case SORT_BY_ID:
      const sortedId = action.arr.sort((a, b) => parseInt(a['id']) - parseInt(b['id']));
      return [...sortedId];

    case SORT_BY_NAME:
      const sortedByName = action.arr.sort((a, b) => a['name'] > b['name'] ? 1 : -1);
      return [...sortedByName];
    
    default:
      return state;
  }
}