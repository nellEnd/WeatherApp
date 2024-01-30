import React, { useState } from 'react'
import axios from 'axios'



const SearchBar = ({ onSearch }) => {

    const searchEvent = (event) => {
        if (event.key === 'Enter') {
            onSearch(event.target.value);
        }
    };

    return (
        <div className='d-flex justify-content-end mt-3'>
            <input style={{ width: '500px', border: 'white' }} type="text"
                className='rounded-pill'
                placeholder='Search by city...'
                onKeyDown={searchEvent}
            />
        </div>
    );
}




export default SearchBar;