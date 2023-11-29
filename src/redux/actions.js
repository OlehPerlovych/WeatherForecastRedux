export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_WEATHER = 'SET_WEATHER';

export const setWeather = (weatherData) => {
    return {
        type: SET_WEATHER,
        payload: weatherData,
    };
};

export const setErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    payload : message
})