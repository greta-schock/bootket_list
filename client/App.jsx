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
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const App = () => {
    const [parksInfoArr, setParksInfoArr] = useState([]);
    const [explorePageIsDisplayed, setExplorePageIsDisplayed] = useState(true);

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
                <Navbar.Brand href="#home"><h1><img src="../images/boot.png" width="35px"></img>Bootket List</h1></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home" onClick={() => setExplorePageIsDisplayed(true)}>Explore</Nav.Link>
                    <Nav.Link href="#features" onClick={() => setExplorePageIsDisplayed(false)}>My Bootket List</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br></br>
            {explorePageIsDisplayed
                ? <ExplorePage
                    parksInfoArr={parksInfoArr}
                  />
                : <MyBootketList />
            }
            <div color="white">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </React.Fragment>
    )
}
export default App;

