
export const SET_WEATHER = 'SET_WEATHER';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const setWeather = (weather) => ({
    type: SET_WEATHER,
    payload : weather
})
export const setErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    payload : message
})