import React from 'react'

export function createArr ( state = { arr: [], error: {} }, action ) {
    if( action.type === 'ADD_PHOTOS' ){
        return { ...state, arr: action.payload }
    } else if ( action.type === 'ERROR' ) {
        return { ...state, error: action.payload }
    }
    return state
}
