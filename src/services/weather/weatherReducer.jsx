import {FETCH_WEATHER} from './weatherActionTypes';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return [...state, action.payload.data];
        default:
            return state;
    }
}