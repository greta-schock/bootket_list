import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TabContainer from 'react-bootstrap/TabContainer';
import ListGroup from 'react-bootstrap/ListGroup';


const HikesList = ({hikeInfoArr}) => {
    return (
        <React.Fragment>
            <TabContainer id="list-group-tabs-example">
                <Row>
                    <Col md="auto">
                        <ListGroup>
                            {hikeInfoArr.map((hike) => (
                                <ListGroup.Item
                                    action
                                    key={hike.id}
                                // value={park.parkCode}
                                // onClick={(event) => getHikesInfo(event.target.value)}
                                >{hike.title}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </TabContainer>
        </React.Fragment>
    )
}

export default HikesList;