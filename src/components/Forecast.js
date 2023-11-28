import React from 'react';

const Forecast = ({weather}) => {
    return (
            <div style={{width: '60%', fontSize: '20px' , color: '#fff'}}>
                {!weather.message &&
                    <div>
                        <p>Location: {weather.country}, {weather.city} </p>
                        <p>Temperature: {weather.temperature}<sup>o</sup>C</p>
                        <p>Pressure: {weather.pressure} </p>
                        <p>Sunset: {new Date(weather.sunset*1000).toTimeString()}</p>
                    </div>
                }
                <p>{weather.message}</p>
            </div>
    );
};

export default Forecast;