import { ADD_CAKE, FETCH_CAKE } from './types';
import axios from 'axios';

const apiUrl = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes';

export const fetchCakes = (posts) => {
  return {
    type: FETCH_CAKE,
    posts
  }
};


export const fetchAllCakes = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchCakes(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};