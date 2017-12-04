import { FETCH_DATA, ADD_TO_FAVORITE, DEL_FROM_FAVORITE } from '../constants';

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
      return [...state, added];
    
    default:
      return state;
  }
}