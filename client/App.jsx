import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _, { where } from 'underscore';
//Child Components
import ExplorePage from './ExplorePage.jsx';
// import NPList from './explore_components/NPList.jsx';
// import HikesList from './explore_components/HikesList.jsx';
// import SelectedHikeDetail from './explore_components/SelectedHikeDetail.jsx';
//React Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row';

const App = () => {
    const [parksInfoArr, setParksInfoArr] = useState([]);

    const getParksInfo = () => {
        axios.get('/api/parksInfo')
            .then((data) => {
                const npArr = _.where(data.data, { designation: "National Park" });
                setParksInfoArr(npArr);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => getParksInfo(), []);

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><h1>[boot icon here]Bootket List</h1></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Explore</Nav.Link>
                    <Nav.Link href="#features">My Bootket List</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <ExplorePage
              parksInfoArr={parksInfoArr}
            />
            
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </React.Fragment>
    )
}


export default App;

