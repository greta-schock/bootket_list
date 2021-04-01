import React, { useState } from 'react';
import SelectedHikePhoto from './SelectedHikePhoto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const SelectedHikeDetail = ({ selectedHikeInfo }) => {
    const [isAddToBLButtonClicked, setIsAddToBLButtonClicked] = useState(false);

    return (
        <React.Fragment>
            <Card>
                <SelectedHikePhoto
                    selectedHikePhotosArr={selectedHikeInfo.images}
                />
                <Card.Body>
                    {/* <Card.Title>Trail Information</Card.Title> */}
                    <Container>
                        <Row>
                            <Col sm={4}>
                                {selectedHikeInfo.duration.length > 0
                                    ? <Card.Text><img src="../images/chronometer.png" width="30px"></img>&nbsp;{selectedHikeInfo.duration}</Card.Text>
                                    : null
                                }
                                {selectedHikeInfo.arePetsPermitted === "true"
                                    ? <Card.Text><img src="../images/pets-allowed.png" width="30px"></img>&nbsp;Pets Allowed</Card.Text>
                                    : <Card.Text><img src="../images/no-pets-allowed.png" width="30px"></img> No Pets Allowed</Card.Text>
                                }
                                {selectedHikeInfo.url.length > 0
                                    ? <a href={selectedHikeInfo.url} target="_blank"><img src="../images/national-park.png" width="30px"></img>&nbsp;Visit nps.gov</a>
                                    : null
                                }
                                <br></br>
                                <br></br>
                                <br></br>
                                {isAddToBLButtonClicked 
                                  ? (
                                    <React.Fragment>
                                        <Button variant="info"><img src="../images/boot.png" width="30px"></img>&nbsp;Added!</Button>
                                        &nbsp;&nbsp;
                                        <Button variant="light" onClick={() => setIsAddToBLButtonClicked(false)}>Remove</Button>
                                    </React.Fragment>)
                                  : <Button variant="outline-info" onClick={() => setIsAddToBLButtonClicked(true)}><img src="../images/boot.png" width="30px"></img>&nbsp;Add to My Bootket List</Button>
                                } 
                            </Col>
                            <Col>
                                {selectedHikeInfo.shortDescription.length > 0
                                    ? (<React.Fragment>
                                        <Card.Title>Description</Card.Title>
                                        <Card.Text>{selectedHikeInfo.shortDescription}</Card.Text>
                                    </React.Fragment>
                                    )
                                    : null
                                }
                                {selectedHikeInfo.accessibilityInformation.length > 0
                                    ? (<React.Fragment>
                                        <Card.Title>Accessibility</Card.Title>
                                        <Card.Text>{selectedHikeInfo.accessibilityInformation}</Card.Text>
                                    </React.Fragment>
                                    )
                                    : null
                                }
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