import React, { useState } from 'react'
import axios from 'axios'


const SearchBar = ({ onSearch }) => {
    
    const [location, setLocation] = useState("")

    const searchLocation = () => {
        const apiKey = "17d5718f58ea449c87c124705242201"
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`


        const urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=1&aqi=no&alerts=no`

        axios.get(url).then((response) => {
            onSearch(response.data, location)
            console.log(response.data);
        });

        setLocation('');
    };

    const searchEvent = (event) => {
        if (event.key === 'Enter') {
            searchLocation();
        }
    };


    return (

        <div className='mb-2 d-flex justify-content-end'>
            <input style={{ width: '500px', border: 'white' }} type="text"
                className='rounded-pill'
                placeholder='Search by city...'
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyDown={searchEvent}
            />

        </div>
    );
}




export default SearchBar;