import {SET_ERROR_MESSAGE, SET_WEATHER} from './actions';

function weatherReducer(state = {
    weatherData: {},
    errorMessage : undefined
}, action) {
    switch (action.type){
        case SET_WEATHER:
            return {...state, weatherData: action.payload};
        case SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.payload};
        default: return state;
    }
}
export default weatherReducer;