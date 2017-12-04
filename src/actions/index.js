import { ADD_TO_FAVORITE, DEL_FROM_FAVORITE, FETCH_DATA } from '../constants';

export const fetchData = (data) => {
  const action = {
    type: FETCH_DATA,
    data
  }
  return action;
}


export const addItem = (item) => {
  const action = {
    type: ADD_TO_FAVORITE,
    item
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
