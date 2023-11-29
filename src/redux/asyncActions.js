import { getWeather } from "../components/api";
import { setErrorMessage, setWeather } from "./actions";
import {Data} from "../components/Data";
export const getWeatherAction = (city) => {
    return async (dispatch) => {
        try {
            const result = await getWeather(city);
            const resObj = JSON.parse(result);
            const newWeather = new Data(resObj);
            dispatch(setWeather(newWeather));
        } catch (error) {
            dispatch(setErrorMessage(error.message || 'Something wrong...'));
            throw error;
        }
    };
};
