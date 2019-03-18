import { ADD_CAKE, FETCH_CAKE } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_CAKE:
      return [...state, action.payload];
    case FETCH_CAKE:
      return action.posts;
    default:
      return state;
  }
}