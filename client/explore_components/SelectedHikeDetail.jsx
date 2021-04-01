import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap'


const SelectedHikeDetail = ({ selectedHikeInfo }) => {
    return (
        <React.Fragment>
            <Card>
                {/* <Card.Img variant="top" src={selectedHikeInfo.images[0].url} /> */}
                <Card.Body>
                    <Card.Title>{selectedHikeInfo.title}</Card.Title>
                    <Card.Text>{selectedHikeInfo.shortDescription}</Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default SelectedHikeDetail;



// <div>{selectedHikeInfo.title}</div>
// <div>{selectedHikeInfo.accessibilityInformation}</div>
// <div>{selectedHikeInfo.arePetsPermitted}</div>
// <div>{selectedHikeInfo.arePetsPermittedWithRestrictions}</div>
// <div>{selectedHikeInfo.duration}</div>
// <div>{selectedHikeInfo.durationDescription}</div>
// <div>{selectedHikeInfo.shortDescription}</div>