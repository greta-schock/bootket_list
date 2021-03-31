import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _, { where } from 'underscore';
//Child Components
import NPList from './components/NPList.jsx';
import HikesList from './components/HikesList.jsx';
import SelectedHikeDetail from './components/SelectedHikeDetail.jsx';
//React Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const App = () => {
    const [parksInfoArr, setParksInfoArr] = useState([]);
    const [hikeInfoArr, setHikeInfoArr] = useState([]);
    const [selectedHikeInfo, setSelectedHikeInfo] = useState({});

    // const [isNPListShowing, setIsNPListShowing] = React.useState(true);

    const getParksInfo = () => {
        axios.get('/api/parksInfo')
            .then((data) => {
                const npArr = _.where(data.data, { designation: "National Park" });
                setParksInfoArr(npArr);
            })
            .catch((err) => console.log(err));
    }

    const getHikesInfo = (parkCode) => {
        console.log(parkCode)
        axios.get(`/api/hikingTrailsInfo/${parkCode}`)
            .then((data) => {
                console.log('data coming in from the GET request: ', data.data);
                setHikeInfoArr(data.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => getParksInfo(), []);

    return (
        <React.Fragment>
            <Container fluid>
                <Row><h1>Bootket List</h1></Row>
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
        </React.Fragment>
    )
}


export default App;

