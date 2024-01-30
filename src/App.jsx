import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import ForecastData from './weather_app/ForecastData';
import CurrentWeather from './weather_app/CurrentWeather';
import WeatherCardGrid from './components/WeatherCardGrid';

function App() {

  const [locationState, setLocationState] = useState(undefined)

  return (
    <div >
      {/* <WeatherCardGrid /> */}
      <SearchBar onSearch={setLocationState} />
      <CurrentWeather location={locationState} />
      <ForecastData location={locationState} />
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



