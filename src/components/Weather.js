import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWeatherAction} from "../redux/asyncActions";
import Forecast from "./Forecast";
const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(store => store.weatherInfo);

    useEffect(() => {
        dispatch(getWeatherAction());
    }, []);

    return (
        <Forecast weather ={weather}/>
    )
};

export default Weather;