import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TabContainer from 'react-bootstrap/TabContainer';
import ListGroup from 'react-bootstrap/ListGroup';


const HikesList = ({ hikeInfoArr, setSelectedHikeInfo, setIsSelectedHikeDisplayed }) => {
    return (
        <React.Fragment>
            <TabContainer id="list-group-tabs-example">
                <Row>
                    <Col md="auto" style={{maxHeight: "900px", overflowY: "auto"}}>
                        <ListGroup>
                            {hikeInfoArr.map((hike) => (
                                <ListGroup.Item
                                    action
                                    key={hike.id}
                                    onClick={() => {
                                        setSelectedHikeInfo(hike);
                                        setIsSelectedHikeDisplayed(true);
                                    }}
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