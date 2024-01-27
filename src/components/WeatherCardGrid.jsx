import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WeatherCards from './WeatherCards';
import WeatherData from '../weather_app/WeatherData';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function WeatherCardGrid() {
    return (
        <Container fluid className='d-flex flex-column justify-content-center align-items-center'>
      <Row className='d-flex justify-content-center'>
        <Col className='my-5 mx-2'><WeatherData /></Col>

        <Col className='my-5 mx-2'><WeatherData /></Col>

        <Col className='my-5 mx-2'><WeatherData /></Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col className='my-5 mx-2'><WeatherCards /></Col>

        <Col className='my-5 mx-2'><WeatherCards /></Col>

        <Col className='my-5 mx-2'><WeatherCards /></Col>
      </Row>
    </Container>
    );
}

export default WeatherCardGrid;