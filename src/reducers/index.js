import { combineReducers } from 'redux';
import CountReducer from './count-reducer';
import UsersReducer from './users-reducer';
import GifsReducer from './gifs-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  users: UsersReducer,
  gifs: GifsReducer,
});

export default rootReducer;
