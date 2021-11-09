import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import Reducer from './reducer'
import reduxThunk from 'redux-thunk';
//import * as serviceWorker from './serviceWorker';

const createStoreWidthMiddleware = applyMiddleware(
  promiseMiddleware,
  reduxThunk
)(createStore)

ReactDOM.render(
  <React.StrictMode>
  <Provider
    store={createStoreWidthMiddleware(Reducer,
      //리듀서 생성 후 넣어줌
      //개발자도구를 사용하기 위한 설정
      window.__REDUX_DEVTOOLS_EXTENSION__&&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
  <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); //

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker();