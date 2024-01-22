import { useState } from 'react'
import axios from 'axios';
import WeatherApp from './weather_app/WeatherApp';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const API_KEY = "11280978eb418f97b7361eaf8c6b459c"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      setLocation("")
    }
  }

  return (
    <div className='w-full h-full relative'>
      <div className='text-center p-4'>
        <input type="text"
          className='py-3 px-6 w-[700px] text-lg rounded-3xl border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md'
          placeholder='Search by city'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation} />

      </div>

      <WeatherApp weatherData={data} />
    </div>
  );
}

export default App
