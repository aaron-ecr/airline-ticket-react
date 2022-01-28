import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'jquery';
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import rootSaga from './sagas';



const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(
  reducer,
  //cartRoot_Reducer,

  enhancer

);
sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}>
  <BrowserRouter basename="/airline-ticket-react">
    <Switch>
      <Route exact path="/"
        render={routeProps => (<App {...routeProps} pageName="Home" />)} />
      <Route path="/shopping-cart"
        render={routeProps => (<App {...routeProps} pageName="ShoppingCart" />)} />
      <Route path="*"
        render={routeProps => (<App {...routeProps} pageName="PageNotFound" />)} />
    </Switch>
  </BrowserRouter>
</Provider>, document.getElementById('root'));


