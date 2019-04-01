import axios from 'axios';

const API_URL = 'http://localhost:9090';

export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  GET_RESPONSE: 'GET_RESPONSE',
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


export function getResponse(history) {
  return (dispatch) => {
    axios.get(API_URL).then((response) => {
      dispatch({ type: ActionTypes.GET_RESPONSE, payload: response.data });
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}
