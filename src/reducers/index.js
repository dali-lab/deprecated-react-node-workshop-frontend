import { combineReducers } from 'redux';
import CountReducer from './count-reducer';
import UsersReducer from './users-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  users: UsersReducer,
});

export default rootReducer;
