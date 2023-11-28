import * as Actions from './actions';

function weatherReducer(state = {
    weatherInfo: {},
    errorMessage : undefined
}, action) {
    switch (action.type){
        case Actions.SET_WEATHER:
            return {...state, weatherInfo: action.payload};
        case Actions.SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.payload};
        default: return state;
    }
}
export default weatherReducer;