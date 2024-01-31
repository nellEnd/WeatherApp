import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import ForecastData from './components/ForecastData';
import CurrentWeather from './components/CurrentWeather';

function App() {

  const [locationState, setLocationState] = useState(undefined)

  return (
    <div >
      <SearchBar onSearch={setLocationState} />
      <CurrentWeather location={locationState} />
      <ForecastData location={locationState} />
    </div>
  );
}

export default App



