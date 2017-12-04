import { ADD_TO_FAVORITE, DEL_FROM_FAVORITE } from '../constants';

import { stateData } from './reducer_fetchData';


export default ( state = [], action ) => {
  switch ( action.type ) {
    
    case ADD_TO_FAVORITE:
      const added = stateData.find(item => item.id === action.id)
      return [...state, added];

    case DEL_FROM_FAVORITE:
      const filtred = state.filter(item => item.id !== action.id)
      return filtred;
    
    default:
      return state;
  }
}