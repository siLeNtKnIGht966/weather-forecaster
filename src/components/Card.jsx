import React from 'react';
import {useWeather} from "../context/weather"

export const Card = ()=>{
    const weather  = useWeather();
    return (
      <div className="card">
        <img src={weather?.data?.current?.condition?.icon} alt="img" />
        <h2>{weather?.data?.current?.temp_c} C</h2>
        <h5>{weather?.data?.location?.region}, {weather?.data?.location?.name}</h5>
      </div>
    );
}
