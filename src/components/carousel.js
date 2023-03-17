import Carousel from 'react-bootstrap/Carousel';

import alabanzaUno from './../asset/img/1.jpg'
import alabanzaTres from './../asset/img/3.jpg'
import alabanzaCuatro from './../asset/img/4.jpg'

import BasicExample from './tituloPortada';



function UncontrolledExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alabanzaUno}
          alt="First slide"
        />
        <Carousel.Caption>
          <BasicExample/>
          <p>El lugar de tu encuentro con Dios!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alabanzaTres}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alabanzaCuatro}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;