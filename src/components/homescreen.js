import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import Body from './ui/body';
import { getPhotos } from "../reducers/photos";

const store = createStore( createArr, applyMiddleware(thunk) );

function createArr( state = {arr: [] }, action ) {
    if( action.type === 'ADD_PHOTOS' ){
        return { ...state, arr: action.payload }
    }
    return state
}

store.dispatch(getPhotos());

export default class HomeScreen extends Component {

render() {
    return (
        <Provider store={ store }>
            <Body navigation={ this.props.navigation }>
            </Body>
        </Provider>
    );
}
}

