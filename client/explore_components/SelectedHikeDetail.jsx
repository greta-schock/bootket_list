import React from 'react';
import SelectedHikePhoto from './SelectedHikePhoto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SelectedHikeDetail = ({ selectedHikeInfo }) => {
    return (
        <React.Fragment>
            <Card>
                <SelectedHikePhoto 
                   selectedHikePhotosArr={selectedHikeInfo.images}
                />
                <Card.Body>
                    <Card.Title>{selectedHikeInfo.title}</Card.Title>
                    <Container>
                        <Row>
                            <Col sm={2}>
                              <Card.Text>{selectedHikeInfo.duration}</Card.Text>
                            </Col>
                            <Col>
                              <Card.Title>Description</Card.Title>
                              <Card.Text>{selectedHikeInfo.shortDescription}</Card.Text>
                              <Card.Title>Accessibility</Card.Title>
                              <Card.Text>{selectedHikeInfo.accessibilityInformation}</Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default SelectedHikeDetail;



// <div>{selectedHikeInfo.accessibilityInformation}</div>
// <div>{selectedHikeInfo.arePetsPermitted}</div>
// <div>{selectedHikeInfo.arePetsPermittedWithRestrictions}</div>
// <div>{selectedHikeInfo.duration}</div>
// <div>{selectedHikeInfo.durationDescription}</div>
// <div>{selectedHikeInfo.shortDescription}</div>