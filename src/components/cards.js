import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import foto from '../asset/img/1.jpg';

function GridExample() {
  return (
    <Container className='mt-5'>
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
            <Card>
                <Card.Img variant="top" src={foto} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </Container>
  );
}

export default GridExample;