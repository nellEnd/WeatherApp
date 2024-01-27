import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherApp.css'
// import './WeatherApp.css'

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

    // HÄR SKA DET VARA ALL INFO OM VÄDRET


    // return (
    //     <div>
    //         {weatherData.current ? (
    //             <div className='w-[500px] h-[250px] bg-blue-400 
    //             shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
    //                 <div className='flex justify-between w-full'>
    //                     <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
    //                         <div className='flex flex-col items-start justify-between h-full'>
    //                             <div>
    //                                 <p className='text-xl'>
    //                                     {weatherData.location.name}, {weatherData.location.country}
    //                                 </p>
    //                                 <p className='text-sm '>
    //                                     {weatherData.current.condition.text}
    //                                 </p>
    //                             </div>
    //                             <div>
    //                                 <h1 className='text-6xl font-semibold'>
    //                                     {weatherData.current.temp_c}°C
    //                                 </h1>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className='w-1/2 flex flex-col justify-between items-end'>
    //                         <div className='relative'>
    //                             <img src={weatherData.current.condition.icon} />
    //                         </div>

    //                     </div>
    //                 </div>
    //             </div>

    //         ) : null}
    //     </div>
    // );
}

export default WeatherData