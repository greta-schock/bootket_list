import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Child Components
import NPList from './explore_components/NPList.jsx';
import HikesList from './explore_components/HikesList.jsx';
import SelectedHikeDetail from './explore_components/SelectedHikeDetail.jsx';
//React-Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ExplorePage = ({ parksInfoArr }) => {
    const [hikeInfoArr, setHikeInfoArr] = useState([]);
    const [selectedHikeInfo, setSelectedHikeInfo] = useState({});

    const getHikesInfo = (parkCode) => {
        console.log(parkCode)
        axios.get(`/api/hikingTrailsInfo/${parkCode}`)
            .then((data) => {
                console.log('data coming in from the GET request: ', data.data);
                setHikeInfoArr(data.data);
            })
            .catch((err) => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3>National Parks</h3>
                    <Form.Group>
                        <Form.Control size="sm" type="text" width="25%" placeholder="Search" />
                    </Form.Group>
                    <NPList
                        parksInfoArr={parksInfoArr}
                        getHikesInfo={getHikesInfo}
                    />
                </Col>
                <Col>
                    <Row>
                        <h3>Hikes List</h3>
                        <Button>Sort Button</Button>
                    </Row>
                    <HikesList
                        hikeInfoArr={hikeInfoArr}
                        setSelectedHikeInfo={setSelectedHikeInfo}
                    />
                </Col>
                <Col>
                    <h3>Hike Detail</h3>
                    <SelectedHikeDetail
                        selectedHikeInfo={selectedHikeInfo}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default ExplorePage;