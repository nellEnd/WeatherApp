import axios from 'axios'
import React, { useState, useEffect } from 'react'

import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherApp.css'
import WeatherItem from '../components/WeatherItem';

const ForecastData = ({ location }) => {

    const [currentWeather, setCurrentWeather] = useState(null)
    const [forecastData, setForecastData] = useState(null)
    console.log('Location i forecastdata: ', location);



    const fetchForecast = async (city = "stockholm") => {
        const apiKey = '17d5718f58ea449c87c124705242201'
        const urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`

        try {
            const response = await axios.get(urlForecast)
            setForecastData(response.data)
        }
        catch (error) {
            console.log('Error fetching forecast : ', error);
        }
    };

    useEffect(() => {
        console.log("Inuti effekten med location ", location);
        fetchForecast(location)
    }, [location]);

    console.log('Current weather: ', currentWeather);


    return (
        <div className="container-fluid">
            {forecastData && (
                <ListGroup horizontal className='w-100 p-2 d-flex justify-content-center align-items-top'>
                    {forecastData.forecast.forecastday.map((day, index) => (
                        <ListGroupItem className='custom-bg-color mx-2' key={index}>
                            <WeatherItem day={day} />
                        </ListGroupItem>
                    ))}
                </ListGroup>

            )}
        </div>
    );
};

export default ForecastData
