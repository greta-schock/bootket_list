import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _, { where } from 'underscore';
//Child Components
import ExplorePage from './ExplorePage.jsx';
import MyBootketList from './MyBootketListPage.jsx';
//React Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const App = () => {
    const [parksInfoArr, setParksInfoArr] = useState([]);
    const [displayParksInfoArr, setDisplayParksInfoArr] = useState([]);
    const [explorePageIsDisplayed, setExplorePageIsDisplayed] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getParksInfo = () => {
        axios.get('/api/parksInfo')
            .then((data) => {
                const npArr = _.where(data.data, { designation: "National Park" });
                setParksInfoArr(npArr);
                setDisplayParksInfoArr(npArr);
            })
            .catch((err) => console.log(err));
    }

    const specificParkSearch = (searchInput) => {
        var searchResultArr = [];
        var lowerCaseInput = searchInput.toLowerCase();
        parksInfoArr.map((park) => {
            var lowerCaseParkName = park.name.toLowerCase();
            if (lowerCaseParkName.includes(lowerCaseInput)) {
                searchResultArr.push(park);
            }
        })
        setDisplayParksInfoArr(searchResultArr);
    }

    useEffect(() => getParksInfo(), []);

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><h1><img src="../images/boot.png" width="35px"></img>&nbsp;Bootket List</h1></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home" onClick={() => setExplorePageIsDisplayed(true)}><h4>Explore</h4></Nav.Link>
                    <Nav.Link href="#features" onClick={() => setExplorePageIsDisplayed(false)}><h4>My Bootket List</h4></Nav.Link>
                </Nav>
                <Form inline>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                    <Button variant="outline-info" onClick={handleShow}>Learn About Leave No Trace</Button>&nbsp;&nbsp;&nbsp;<Button variant="outline-info">Sign Up</Button>
                </Form>
            </Navbar>
            {explorePageIsDisplayed
                ? <ExplorePage
                    parksInfoArr={parksInfoArr}
                    displayParksInfoArr={displayParksInfoArr}
                    specificParkSearch={specificParkSearch}
                />
                : <MyBootketList />
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Seven Principles of Leave No Trace</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src="../images/lnt.jpeg" width="450px"></img></Modal.Body>
                <Modal.Footer>
                    <a href="https://lnt.org/" target="_blank">Learn more at lnt.org</a>
                </Modal.Footer>
            </Modal>
            <div style={{ color: 'white' }}>Icons made by <a href="https://www.freepik.com" title="Freepik" style={{ color: 'white' }}>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" style={{ color: 'white' }}>www.flaticon.com</a></div>
        </React.Fragment>
    )
}
export default App;

