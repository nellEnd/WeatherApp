import axios from 'axios'
import React, { useState, useEffect } from 'react'

import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherApp.css'

const ForecastData = () => {

    const [currentWeather, setCurrentWeather] = useState(null)
    const [forecastData, setForecastData] = useState(null)

    const apiKey = '17d5718f58ea449c87c124705242201'
    const urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=budapest&days=5&aqi=no&alerts=no`
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=stockholm&aqi=no`

    useEffect(() => {

        //current weather
        axios.get(url).then(response => {
            setCurrentWeather(response.data)
        })
            .catch(error => {
                console.error('Error fetching current weather: ', error)
            })

        //weather forecast
        axios.get(urlForecast).then(response => {
            setForecastData(response.data)
        })
            .catch(error => {
                console.error('Error fetching forecast: ', error)
            })

    }, []);

    return (
        <div>
            {currentWeather && (
                <div>
                    <div className="d-flex justify-content-center align-items-center h-100 ">
                        <Card style={{ width: '16rem', height: '12rem' }} className='text-center custom-bg-color'>
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <div>
                                    <img src={currentWeather.current.condition.icon} style={{ maxWidth: '50px' }} />
                                    <Card.Text className="mb-2 text-muted">{currentWeather.location.name}, {currentWeather.location.country}</Card.Text>
                                    <Card.Text className='h1'>{Math.round(currentWeather.current.temp_c)}°C</Card.Text>
                                    <Card.Text className='text-muted'>{currentWeather.location.localtime}</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            )}

            {forecastData && (

                <div>
                    {forecastData.forecast.forecastday.map((day, index) => (

                        <ListGroup key={index}>
                            <ListGroupItem className='custom-bg-color'>
                                <Row>
                                    <Col>
                                        <img src={day.day.condition.icon} style={{ maxWidth: '45px' }} className='mb-1' />
                                        <p>{day.day.condition.text}</p>
                                    </Col>
                                    <Col>

                                    </Col>
                                    <Col>
                                        <p>{day.date}</p>
                                    </Col>
                                    <Col>
                                        <p>Temp: {Math.round(day.day.maxtemp_c)}°C / {Math.round(day.day.mintemp_c)}°C</p>
                                    </Col>
                                    <Col>
                                        <p>Max wind: {day.day.maxwind_kph} km/h</p>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            
                        </ListGroup>

                    ))}
                </div>
            )}
        </div>
    );
};

export default ForecastData
