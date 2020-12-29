import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Library
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Redux/Reducers/index.Reducer'

const initialState = {}
const middleware = [thunk, logger]
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)))



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>

        <App />

      </React.StrictMode>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
