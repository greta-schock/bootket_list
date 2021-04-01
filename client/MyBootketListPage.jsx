const fakeData = require('../fakeData.js');
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const MyBootketListPage = () => {
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
                        <tr>
                            <td>{index + 1}</td>
                            <td>{obj.title}</td>
                            <td>{obj.parkName}</td>
                            <td>test</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default MyBootketListPage;