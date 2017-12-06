import { 
  ADD_TO_FAVORITE, 
  DEL_FROM_FAVORITE, 
  FETCH_DATA,
  SORT_BY_ID,
  SORT_BY_NAME,
  SORT_FAV_BY_ID,
  SORT_FAV_BY_NAME } from '../constants';


export const fetchData = (data) => {
  const action = {
    type: FETCH_DATA,
    data
  }
  return action;
}


export const addItem = (id) => {
  const action = {
    type: ADD_TO_FAVORITE,
    id
  }
  return action;
}

export const sortFavById = (arr) => {
  const action = {
    type: SORT_FAV_BY_ID,
    arr
  }
  return action;
}

export const sortFavByName = (arr) => {
  const action = {
    type: SORT_FAV_BY_NAME,
    arr
  }
  return action;
}


export const sortById = (arr) => {
  const action = {
    type: SORT_BY_ID,
    arr
  }
  return action;
}

export const sortByName = (arr) => {
  const action = {
    type: SORT_BY_NAME,
    arr
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
