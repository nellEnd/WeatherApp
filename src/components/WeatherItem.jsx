import './WeatherApp.css'
import { useState } from 'react'
import { Col, Row, Modal } from 'react-bootstrap'


const WeatherItem = ({ day }) => {


    const [lgShow, setLgShow] = useState(false);


    const getDayName = (dateString) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const todaysDate = new Date()
        const weatherDate = new Date(dateString)

        const dayOfWeekIndex = weatherDate.getDay()

        if (weatherDate.getDate() === todaysDate.getDate())
            return 'Today'
        else if (weatherDate.getDate() === todaysDate.getDate() + 1)
            return 'Tomorrow'
        else
            return daysOfWeek[dayOfWeekIndex]
    };

    const dateConvert = (dateString) => {
        const inputDate = new Date(dateString)

        const day = inputDate.getDate()
        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(inputDate);

        const convertedDate = day + ' ' + month

        return convertedDate
    };


    const kmHourConvert = (kmPerHour) => {
        const converter = (kmPerHour) = kmPerHour * 1000 / 3600
        return Math.round(converter)
    };

    return (
        <>
            <Row className='hover-effect'>
                <hr style={{ width: '100%', marginBottom: '40px' }} />

                <Col onClick={() => {
                    setLgShow(true)

                }} className='custom-font'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                    <p style={{ marginBottom: '4px' }}>
                        {getDayName(day.date)}
                    </p>
                    <p style={{ fontSize: '14px', fontWeight: 'normal' }}>{dateConvert(day.date)}</p>

                    <img src={day.day.condition.icon} style={{ maxWidth: '35px' }} />

                    <p style={{ fontSize: '18px' }}>{Math.round(day.day.avgtemp_c)}°C</p>


                </Col>
            </Row>


            <Modal
                show={lgShow}
                onHide={() => setLgShow(false)}
                animation={false}
                dialogClassName="modal-80w"
                className='custom-font'
            >
                <Modal.Header closeButton>
                    <h1 style={{ fontSize: '20px', textAlign: 'center' }}>
                        {getDayName(day.date)}  {dateConvert(day.date)} </h1>
                    <img src={day.day.condition.icon} style={{ maxWidth: '35px', marginLeft: '16px', marginBottom: '7px' }} />

                    <Col style={{ textAlign: 'end', marginRight: '30px', fontSize: '12px', color: '#999999' }}>
                        <p>°C min / max</p>
                        <p style={{ marginRight: '10px' }}>{Math.round(day.day.mintemp_c)}° / {Math.round(day.day.maxtemp_c)}°</p>
                    </Col>

                </Modal.Header>
                <Modal.Body>
                    <Row style={{ textAlign: 'center', color: '#999999', fontSize: '14px' }}>
                        <Col>
                            <p >Time</p>
                        </Col>
                        <Col>
                            <p>°C</p>
                        </Col>
                        <Col>
                            <p>Wind</p>
                        </Col>
                        <Col>
                            <p>Humidity</p>
                        </Col>
                        <Col>
                            <p>rain</p>
                        </Col>

                    </Row>


                    {day.hour.map((hour, index) => (
                        <Row key={index} style={{ padding: '5px', textAlign: 'center', fontSize: '14px' }}>
                            <hr style={{ width: '100%' }} />
                            <Col>
                                <span>{hour.time.split(' ')[1]} </span>
                            </Col>
                            <Col>
                                <img src={hour.condition.icon} style={{ maxWidth: '25px' }} />
                                <span> {Math.round(hour.temp_c)}°C</span>

                            </Col>
                            <Col>
                                <p>{kmHourConvert(Math.round(hour.wind_kph))} m/s</p>
                            </Col>
                            <Col>
                                <p>{hour.humidity}%</p>
                            </Col>
                            <Col>
                                <p>{hour.chance_of_rain}%</p>
                            </Col>
                        </Row>
                    ))}


                </Modal.Body>
            </Modal>

        </>
    );

}

export default WeatherItem