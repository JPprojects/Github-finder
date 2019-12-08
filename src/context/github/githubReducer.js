import {
  SEARCH_USER,
  GET_USER,
  CLEAR_USER,
  GET_REPOS,
  SET_LOADING
} from '../types';
import { stat } from 'fs';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
