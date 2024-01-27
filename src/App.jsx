import { useState } from 'react'
import axios from 'axios';
import WeatherData from './weather_app/WeatherData';
import './App.css'
import CurrentWeather from './weather_app/CurrentWeather';
import WeatherCardGrid from './components/WeatherCardGrid';
import SearchBar from './components/SearchBar';
import ForecastData from './weather_app/ForecastData';

function App() {

  const [data, setData] = useState({})
  const [showCurrentWeather, setShowCurrentWeather] = useState(true);
  // const [location, setLocation] = useState("")

  const searchEvent = (weatherData, location) => {
    setData(weatherData);
    setShowCurrentWeather(false);
  }


  return (
    <div className='w-100 h-100 position-relative'>
      <div className='text-center p-4'>
        <SearchBar onSearch={searchEvent} />
        <ForecastData />
      </div>
    </div>


  );
}

// <div className='w-100 h-100 position-relative'>
// <div className='text-center p-4'>
//   <SearchBar onSearch={searchEvent} />
// </div>
// {showCurrentWeather && <CurrentWeather />}
// <WeatherData weatherData={data} />
// </div>

export default App



