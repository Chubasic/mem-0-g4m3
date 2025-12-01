import React from 'react';
import { composeWithDevTools } from '@redux-devtools/extension';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { gameReducer } from './store/reducers/reducer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
    combineReducers({ gameReducer }),
    composeWithDevTools(
        applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
