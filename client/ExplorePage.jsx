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
    const [isHikesListDisplayed, setIsHikesListDisplayed] = useState(false);
    const [selectedHikeInfo, setSelectedHikeInfo] = useState(false);
    const [isSelectedHikeDisplayed, setIsSelectedHikeDisplayed] = useState(false);


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
                <Col sm={2} style={{backgroundColor: 'pink'}}>
                    <h3>National Parks</h3>
                    <Form.Group> {/* this width is not working :/ */}
                        <Form.Control className="np-search" size="sm" type="text" placeholder="Search" />
                    </Form.Group>
                    <NPList
                        parksInfoArr={parksInfoArr}
                        getHikesInfo={getHikesInfo}
                        setIsHikesListDisplayed={setIsHikesListDisplayed}
                    />
                </Col>
                {isHikesListDisplayed
                    ? (<Col sm={3} style={{backgroundColor: 'lightgreen'}}>
                        <h3>Trails/Hikes</h3>
                            <HikesList
                                hikeInfoArr={hikeInfoArr}
                                setSelectedHikeInfo={setSelectedHikeInfo}
                                setIsSelectedHikeDisplayed={setIsSelectedHikeDisplayed}
                            />
                        </Col>)
                    : null
                }
                {isSelectedHikeDisplayed 
                    ? (<Col style={{backgroundColor: 'lightblue'}}>
                            <h3>{selectedHikeInfo.title}</h3>
                            <SelectedHikeDetail
                                selectedHikeInfo={selectedHikeInfo}
                            />
                         </Col>)
                    : null
                }

            </Row>
        </Container>
    )
}

export default ExplorePage;