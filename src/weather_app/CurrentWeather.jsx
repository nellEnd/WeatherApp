import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherApp.css'


const CurrentWeather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const apiKey = '17d5718f58ea449c87c124705242201'
                const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=stockholm&aqi=no`

                const response = await axios.get(url)
                setWeatherData(response.data);
            }
            catch (error) {
                console.error('Error fetching weather data:', error)
            }
        };
        fetchWeatherData();
    });

    //   console.log(weatherData.location.name);
    return (
        <>
            {weatherData && (
                <div>
                    <div className="d-flex justify-content-center align-items-center h-100 ">
                        <Card style={{ width: '16rem', height: '12rem' }} className='text-center custom-bg-color'>
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <div>
                                    <img src={weatherData.current.condition.icon} style={{ maxWidth: '50px' }} />
                                    <Card.Text className="mb-2 text-muted">{weatherData.location.name}, {weatherData.location.country}</Card.Text>
                                    <Card.Text className='h1'>{weatherData.current.temp_c}°C</Card.Text>
                                    <Card.Text className='text-muted'>{weatherData.location.localtime}</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                </div>
            )}
        </>
    );
}

export default CurrentWeather
