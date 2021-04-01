import React from 'react';
import SelectedHikePhoto from './SelectedHikePhoto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


const SelectedHikeDetail = ({ selectedHikeInfo }) => {
    return (
        <React.Fragment>
            <Card>
                <SelectedHikePhoto 
                   selectedHikePhotosArr={selectedHikeInfo.images}
                />
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