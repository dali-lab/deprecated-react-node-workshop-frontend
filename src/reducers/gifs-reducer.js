import { ActionTypes } from '../actions';

const initialState = {
  all: null,
};

const GifsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_GIFS:
      return Object.assign({}, state, { all: action.payload });
    default:
      return state;
  }
};

export default GifsReducer;
