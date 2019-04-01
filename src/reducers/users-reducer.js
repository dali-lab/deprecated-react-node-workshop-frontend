import { ActionTypes } from '../actions';

const initialState = {
  all: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RESPONSE:
      return Object.assign({}, state, { all: action.payload });
    default:
      return state;
  }
};

export default UsersReducer;
