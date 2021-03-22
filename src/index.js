import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import allReducers from './reducers/index';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [];
const logger = createLogger({ collapsed: true });

if (process.env.ENVIRONMENT !=='production') {
  middleware.push(logger);
}

const createStoreWhiteMiddleware = applyMiddleware(thunk,...middleware)(createStore);
const store = createStoreWhiteMiddleware(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
