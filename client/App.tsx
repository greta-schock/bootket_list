import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


// interface IProps {
//     name: string
//     onTextChange: (text: string) => void;
// }


export const App: React.FC = () => {
    // const 
    // const [isNPListShowing, setIsNPListShowing] = React.useState(true);

    

    return (
        <React.Fragment>
            <Container fluid>
                <Row><h1>Bootket List</h1></Row>
                <Row>
                    <Col><h1>NPList</h1></Col>
                    <Col><h1>HikesList</h1></Col>
                </Row>
            </Container>
        </React.Fragment>

    )
}

