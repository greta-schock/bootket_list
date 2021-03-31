import * as React from 'react';
import axios from 'axios';
import _, { where } from 'underscore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TabContainer from 'react-bootstrap/TabContainer';
import ListGroup from 'react-bootstrap/ListGroup';


// interface IParksInfoArr {
//     id: string, 
//     url: string,
//     name: string
// }


export const App: React.FC = () => {
    const [parksInfoArr, setParksInfoArr] = React.useState([]);
    //const [displayParksInfoArr, setDisplayParksInfoArr] = React.useState([]);
    const [hikeInfoArr, setHikeInfoArr] = React.useState([]);

    // const [isNPListShowing, setIsNPListShowing] = React.useState(true);

    const getParksInfo = () => {
        axios.get('/api/parksInfo')
            .then((data) => {
                const npArr = _.where(data.data, { designation: "National Park" });
                setParksInfoArr(npArr);
                //setDisplayParksInfoArr(npArr);
            })
            .catch((err) => console.log(err));
    }

    const getHikesInfo = (parkCode) => {
        console.log(parkCode)
        axios.get(`/api/hikingTrailsInfo/${parkCode}`)
          .then((data) => {
              console.log(data.data);
              setHikeInfoArr(data.data);
            })
          .catch((err) => console.log(err));
    }

    React.useEffect(() => getParksInfo(), []);

    return (
        <React.Fragment>
            <Container fluid>
                <Row><h1>Bootket List</h1></Row>
                <Row>
                    <Col>
                        <h3>National Parks</h3>
                        <TabContainer id="list-group-tabs-example">
                            <Row>
                                <Col sm={4}>
                                    <ListGroup>
                                        {parksInfoArr.map((park) => (
                                            <ListGroup.Item 
                                            action
                                            key={park.id}
                                            value={park.parkCode}
                                            onClick={(event) => getHikesInfo(event.target.value)}
                                            >{park.name}</ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </TabContainer>
                    </Col>
                    <Col>
                      <h3>HikesList</h3>
                      <ListGroup>

                      {hikeInfoArr.map((hike) => {
                          <ListGroup.Item>{hike.title}</ListGroup.Item>
                      })}
                      </ListGroup>

                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

