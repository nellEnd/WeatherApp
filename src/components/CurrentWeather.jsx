import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherApp.css'


const CurrentWeather = ({ location }) => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async (city = "stockholm") => {

        const apiKey = '17d5718f58ea449c87c124705242201'
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`

        try {
            const response = await axios.get(url)
            setWeatherData(response.data)
        }
        catch (error) {
            console.log('Error fetching current weather: ', error);
        }
    };

    useEffect(() => {
        fetchWeatherData(location)
    }, [location]);

    //   console.log(weatherData.location.name);
    return (
        <>
            {weatherData
                && (
                    <Container >
                        <div className='mt-4'>
                            <Row className='custom-font '>
                                <p className='mb-1 text-muted'>Current weather in</p>

                                <p style={{ fontSize: '40px' }}>
                                    {weatherData.location.name}, {weatherData.location.country}
                                </p>
                                <Col className='d-flex hej'>
                                    <div>
                                        <p style={{ fontSize: '70px' }}>
                                            {Math.round(weatherData.current.temp_c)}°C
                                        </p>
                                    </div>
                                    <div className='mb-4 d-flex align-items-center'>
                                        <img src={weatherData.current.condition.icon} style={{ maxWidth: '67px', marginLeft: '50px' }} />
                                    </div>
                                </Col>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <p style={{ fontSize: '19px' }}>{weatherData.current.condition.text}</p>
                                    <p style={{ fontSize: '15px', marginLeft: '40px' }}>
                                        {weatherData.location.localtime}
                                    </p>

                                </div>

                            </Row>
                        </div>

                    </Container>
                )}
        </>
    );
}

export default CurrentWeather
