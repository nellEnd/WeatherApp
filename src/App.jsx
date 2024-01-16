import { useState } from 'react'
import './App.css'
import { Axios } from 'axios';
import WeatherApp from './weather_app/WeatherApp';

function App() {
  return(
    <div className='w-full h-full relative'>
      <div className='text-center p-4'>
        <input type="text" />

      </div>
    </div>
    );

}

export default App
