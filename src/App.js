// video linki https://www.youtube.com/watch?v=HSz_VE_2qos
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=apikey
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {usePosition} from "use-position";
import Weather from './components/weather'

const App = () => {

    const [weather,setWeather] = useState();
    const {latitude, longitude} = usePosition();

    const getWeatherData = async (lat, lon) => {
        const key = process.env.REACT_APP_WEATHER_API_KEY
        const lang = navigator.language.split(".")[0]
        console.log(lang);

        try {  
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`)
        setWeather(data);
        } catch {
            alert(`Failed to get weather`)
        }
    }

    useEffect(() => {
      latitude & longitude && getWeatherData(latitude,longitude)
    }, [latitude, longitude])

  return (

    <div>
        <h1>hava durumu</h1>
        <Weather weather={weather}/>
    </div>

  )
}

export default App;