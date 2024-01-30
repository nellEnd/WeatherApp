import { useState } from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'
const WeatherItem = ({ day }) => {

    let datey = new Date()
    datey = datey.getDate()

    console.log('day: ', day);
    const [openHours, setOpenHours] = useState(false);


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

    }


    return (
        <>
            <Col className='m-2 align-items-center'>
                <Row className='justify-content-center'>
                    <p>{getDayName(day.date)}</p>
                </Row>
                <Row className='justify-content-center'>
                    <img src={day.day.condition.icon} style={{ maxWidth: '65px' }} />
                </Row>
                <Row className='justify-content-center align-text-center'>
                    <p>{Math.round(day.day.avgtemp_c)}°C</p>
                </Row>
                <Row>
                    <Button onClick={() => {
                        setOpenHours(!openHours)
                    }}>hej</Button>
                </Row>
            </Col>
            {openHours &&
                day.hour.map((hour, index) => (
                    <Col key={index}>
                        <p>{hour.time.split(' ')[1]}: {Math.round(hour.temp_c)}°C</p>
                        <img src={hour.condition.icon} style={{ maxWidth: '25px' }}/>
                    </Col>
                )
                )
            }
        </>
    );

}

export default WeatherItem