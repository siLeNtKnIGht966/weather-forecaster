import { createContext, useContext ,useState} from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const  useWeather = () => {
    return useContext(WeatherContext);

}


export const WeatherProvider = (props) =>{
    const [data, setData] = useState(null);
     const [searchCity, setSearchCity] = useState(null);
     const fetchData = async () => {
        const response = await getWeatherDataForCity(searchCity);
        console.log(response)
        setData(response)
     }
     const fetchCurrentUserLocationData = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(position.coords.latitude,position.coords.longitude)
            .then((data)=>{
                console.log(data)
                setData(data)});
        });
     };
    return <WeatherContext.Provider value={{searchCity,data,fetchData,setSearchCity,fetchCurrentUserLocationData}}>{props.children}</WeatherContext.Provider>
}