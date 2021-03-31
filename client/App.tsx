import * as React from 'react';
import axios from 'axios';
import _, { where } from 'underscore';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


// interface IParksInfoArr {
//     id: string, 
//     url: string,
//     name: string
// }


export const App: React.FC = () => {
    const [parksInfoArr, setParksInfoArr] = React.useState([]);
    // const [isNPListShowing, setIsNPListShowing] = React.useState(true);

    const getParksInfo = () => {
        axios.get('/api/parksInfo')
            .then((data) => {
                const npArr = _.where(data.data, {designation: "National Park"})
                setParksInfoArr(npArr)
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
                        {parksInfoArr.map((park) => (
                            <div key={park.id}>{park.name}</div>
                        ))}
                    </Col>
                    <Col><h1>HikesList</h1></Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}

