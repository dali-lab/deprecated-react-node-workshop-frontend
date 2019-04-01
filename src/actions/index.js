import axios from 'axios';

const API_URL = 'http://localhost:9090';
const GIPHY_URL = 'http://api.giphy.com';
const API_KEY = '?api_key=dc6zaTOxFJmzC';

export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  GET_RESPONSE: 'GET_RESPONSE',
  GET_GIFS: 'GET_GIFS',
};

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}


export function getResponse() {
  return (dispatch) => {
    axios.get(API_URL).then((response) => {
      dispatch({ type: ActionTypes.GET_RESPONSE, payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function getGifs() {
  return (dispatch) => {
    axios.get(`${GIPHY_URL}/v1/gifs/trending${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.GET_GIFS, payload: response.data.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}
