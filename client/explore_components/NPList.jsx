import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TabContainer from 'react-bootstrap/TabContainer';
import ListGroup from 'react-bootstrap/ListGroup';

const NPList = ({ parksInfoArr, getHikesInfo, setIsHikesListDisplayed }) => {
    return (
        <React.Fragment>
            <TabContainer id="list-group-tabs-example">
                <Row>
                    <Col style={{maxHeight: "900px", overflowY: "auto"}}>
                        <ListGroup>
                            {parksInfoArr.map((park) => (
                                <ListGroup.Item
                                    action
                                    key={park.id}
                                    value={park.parkCode}
                                    onClick={(event) => {
                                        getHikesInfo(event.target.value);
                                        setIsHikesListDisplayed(true);
                                    }}
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