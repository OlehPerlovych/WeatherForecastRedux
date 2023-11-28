import {getWeather} from "../components/api";
import {Data} from "../components/Data";
import {setErrorMessage, setWeather} from "./actions";

export const getWeatherAction = () => {
    return dispatch => {
        getWeather().then(
            result => {
                const resObj = JSON.parse(result);
                const newWeather = new Data(resObj);
                dispatch(setWeather(newWeather));
            },
            err => {
                dispatch(setErrorMessage(err.message));
            }
        ).catch(err => {
            dispatch(setErrorMessage(err.message));
        });
    }
}