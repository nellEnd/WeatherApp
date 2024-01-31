import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherApp.css'

const WeatherData = ({ weatherData }) => {
    //   console.log(weatherData.location.name);
    return (
        <div>
            {weatherData.current ? (
                <div className="d-flex justify-content-center align-items-center h-100 ">
                    <Card style={{ width: '16rem', height: '12rem' }} className='text-center custom-bg-color'>
                        <Card.Body className="d-flex justify-content-center align-items-center ">
                            <div className=''>
                            <img src={weatherData.current.condition.icon} style={{ maxWidth: '50px' }} />
                                <Card.Subtitle className="mb-2 text-muted">{weatherData.location.name}, {weatherData.location.country}</Card.Subtitle>
                                <Card.Text className='h1'>{weatherData.current.temp_c}°C</Card.Text>
                                <Card.Text className='mt-3'>{weatherData.location.localtime}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

            ) : null}
        </div>
    );
}

export default WeatherData