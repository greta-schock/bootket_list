const fakeData = require('../fakeData.js');
import React, { useState } from 'react';
import SelectedHikeDetail from './explore_components/SelectedHikeDetail.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

const MyBootketListPage = () => {
    const [show, setShow] = useState(false);
    const [selectedHikeInfo, setSelectedHikeInfo] = useState({});

    const handleClose = () => setShow(false);

    return (
        <React.Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Trail Name</th>
                        <th>National Park</th>
                        <th>Explore Trail Info</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeData.map((obj, index) => (
                        <tr key={obj.id + index}>
                            <td>{index + 1}</td>
                            <td>{obj.title}</td>
                            <td>{obj.parkName}</td>
                            <td>
                                <Button 
                                  variant="outline-info" 
                                  onClick={() => {
                                      setShow(true);
                                      setSelectedHikeInfo(obj)}}
                                >See Trail Info</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Explore!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SelectedHikeDetail 
                      selectedHikeInfo={selectedHikeInfo}
                    />
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default MyBootketListPage;