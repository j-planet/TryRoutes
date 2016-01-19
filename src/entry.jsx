/**
 * Created by jj on 1/19/16.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import RootReducer from './reducers/rootReducer';

//var Styles = require('../css/app.scss');    // just to compile styles

//const blah = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
    <Provider store={applyMiddleware(ReduxPromise)(createStore)(RootReducer)}>
        <h1>Hello.</h1>
    </Provider>
    ,
    document.getElementById('app-container')
);