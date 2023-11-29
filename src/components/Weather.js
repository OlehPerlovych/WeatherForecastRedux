import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAction } from '../redux/asyncActions';
import Forecast from './Forecast';

const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(store => store.weatherData);
    const [city, setCity] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setCity(e.target.value);
        setError(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (city) {
            dispatch(getWeatherAction(city))
                .then(() => {
                    setSubmitted(true);
                })
                .catch(() => {
                    setError(true);
                    setSubmitted(false);
                });
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleInputChange}
                />
                <button type="submit">Get weather</button>
            </form>
            {submitted && !error && <Forecast weather={weather} />}
            {error && <p>Invalid input.</p>}
        </div>
    );
};

export default Weather;
