import Carousel from 'react-bootstrap/Carousel';

import alabanzaUno from './../asset/img/1.jpg'
import alabanzaTres from './../asset/img/3.jpg'
import alabanzaCuatro from './../asset/img/4.jpg'



function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alabanzaUno}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='h1'>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alabanzaCuatro}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='h1'>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alabanzaTres}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='h1'>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;