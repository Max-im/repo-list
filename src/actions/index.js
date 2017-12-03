import { ADD_TO_FAVORITE, DEL_FROM_FAVORITE } from '../constants';


export const addItem = (text) => {
  const action = {
    type: ADD_TO_FAVORITE,
    text
  }
  return action;
}

export const delItem = (id) => {
  const action = {
    type: DEL_FROM_FAVORITE,
    id
  }
  return action;
}
