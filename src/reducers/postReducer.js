import { FETCH_CAKE } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CAKE:
      return action.posts;
    default:
      return state;
  }
}