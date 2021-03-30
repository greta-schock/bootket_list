import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


// interface IProps {
//     name: string
//     onTextChange: (text: string) => void;
// }


export const App: React.FC = () => {
  return (
      <Container fluid>
          <Row>
              <h1>Bootket List</h1>
          </Row>
      </Container>
    // <React.Fragment>
    // <div id="header">
    //     <h1>Bootket List</h1>
    // </div>
    // <div id="body">
    //     <div id="navigation_toggle_bar">Navigation Toggle Bar</div>
    //     <div>Hikes List (specific to NP selected)</div>
    //     <div>Hike Selected Infomation</div>
    // </div>
    // </React.Fragment>


   
  )
}

