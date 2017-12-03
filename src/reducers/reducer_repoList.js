import { ADD_TO_FAVORITE } from '../constants';



export default ( state = [], action ) => {
  switch ( action.type ) {
    
    case ADD_TO_FAVORITE:
      return [];
    
    default:
      return state;
  }
}