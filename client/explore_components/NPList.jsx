import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TabContainer from 'react-bootstrap/TabContainer';
import ListGroup from 'react-bootstrap/ListGroup';

const NPList = ({ parksInfoArr, getHikesInfo }) => {
    return (
        <React.Fragment>
            <TabContainer id="list-group-tabs-example">
                <Row>
                    <Col>
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
        </React.Fragment>
    )
}

export default NPList;