import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header';
import MainDescription from './components/mainDescription';
import OtherDetails from './components/otherDetails';
import Form from './components/form';
import getWeather from './api/getWeather';



function App() {

  const [weather, setWeather] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [region, setRegion] = useState('');
  const apiKey = '41548eb1b16f86e5f5763b90d344cecd'

  const setStateValues = (type, state) => {
    if(type === 'weather'){
      setWeather(state);
    } else if (type === 'isLoaded') {
      setIsLoaded(state);
    }else if (type === 'error') {
      setError(state);
    }
  }

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(region);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${apiKey}`;
    console.log(url);
    getWeather(url, setStateValues, isLoaded);
  }
  console.log(weather);

  let mainWeather;
  let weatherDescription;
  let latitude;
  let longitude;
  let temperature;
  let feelsLike;
  let maxTemp;
  let minTemp;
  let pressure;
  let humidity;
  let visibility;
  let windSpeed;
  let timezone;
  

  if (isLoaded) {
    console.log('Weather Loaded: ',weather)
    latitude = weather["coord"]["lat"];
    longitude = weather.coord.lon;
    temperature = weather.main.temp;
    feelsLike = weather.main.feels_like;
    maxTemp = weather.main.temp_max;
    minTemp = weather.main.temp_min;
    pressure = weather.main.pressure;
    humidity = weather.main.humidity;
    visibility = weather.visibility;
    windSpeed = weather.wind.speed;
    timezone = weather.timezone
    mainWeather = weather.weather[0].main;
    weatherDescription = weather.weather[0].description
  }
  

  return (
    <div >
      <Form region={region} setRegion={setRegion} handleSubmit={handleSubmit}/>
      <Header mainWeather={mainWeather} weatherDescription={weatherDescription}/>
      <MainDescription />
      <OtherDetails />
    </div>
  );
}

export default App;
