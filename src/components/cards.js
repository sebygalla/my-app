import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



import foto from '../asset/img/1.jpg';
import foto3 from '../asset/img/3.jpg';
import foto4 from '../asset/img/4.jpg';







function GroupExample() {
  return (
    <Container className='d-flex flex-wrap align-items-center justify-content-between mt-5 m-auto text-center '>
       

        <Card style={{ width: '300px' }}>
          <Card.Img variant="top" src={foto} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card style={{ width: '300px' }}>
          <Card.Img variant="top" src={foto4} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card style={{ width: '300px' }}>
          <Card.Img variant="top" src={foto3} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ width: '300px' }}>
          <Card.Img variant="top" src={foto4} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      
    </Container>
  );
}

export default GroupExample;