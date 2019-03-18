import { ADD_CAKE, FETCH_CAKE } from './types';
import axios from 'axios';

const apiUrl = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes';

export const createCake = ({ name, imageUrl, comment, yumFactor }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {name, comment, imageUrl, yumFactor})
      .then(response => {
        dispatch(createCakeSuccess(response.data))
      })
      .catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        alert(error.config);
    });
  };
};

export const createCakeSuccess =  (data) => {
  return {
    type: ADD_CAKE,
    payload: {
      name: data.name,
      comment: data.comment,
      imageUrl: data.imageUrl,
      yumFactor: data.yumFactor
    }
  }
};

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