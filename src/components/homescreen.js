import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import Body from './ui/body';
import { getPhotos } from "../actions/getphotos";
import { createArr } from '../reducers/reducer.js'

const store = createStore( createArr, applyMiddleware(thunk) );

store.dispatch(getPhotos());

export default class HomeScreen extends Component {

    render() {
        return (
            <Provider store={ store }>
                <Body navigation={ this.props.navigation }/>
            </Provider>
        );
    }
}
