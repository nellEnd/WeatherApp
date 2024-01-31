import React, { useState } from 'react'
import '../weather_app/WeatherApp.css'

const SearchBar = ({ onSearch }) => {


    const searchEvent = (event) => {
        if (event.key === 'Enter') {
            onSearch(event.target.value);
        }
    };

    return (
        <div className='d-flex justify-content-end mt-4' style={{ marginRight: '35px' }}>
            <input style={{ width: '500px', height:'32px', borderRadius: '30px', border: '2px solid #afafaf', outline:'none' }} type="text"
                className='custom-font'
                placeholder='Search by city...'
                onKeyDown={searchEvent}
            />
        </div>
    );
}




export default SearchBar;