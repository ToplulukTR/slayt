import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (history, preloadedState) => {
  const middleware = routerMiddleware(history);
  const store = createStore(
    combineReducers({
      app: rootReducer,
      router: routerReducer
    }),
    preloadedState,
    applyMiddleware(thunk, middleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
