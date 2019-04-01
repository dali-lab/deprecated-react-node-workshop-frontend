
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import Counter from './containers/counter';
import Controls from './containers/controls';
import Users from './containers/users';
import reducers from './reducers';
import './style.scss';

export const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <Counter />
      <Controls />
    </div>
  );
};

const Test = (props) => {
  return (
    <div>
      <span>ID:&nbsp;</span>
      {props.match.params.id}
    </div>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/users" exact>Users</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/nav" component={Nav} />
          <Route path="/users" component={Users} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
