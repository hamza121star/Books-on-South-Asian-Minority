import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from './logo.svg';

class Main extends React.Component {
    render() {
      return (
        <div className="main-page">   
          <header className="header spacing-title"> 
            <div className="logo-area">
              <img src={Logo} />
            </div>
          </header>
          <Container className="spacing"> 
          <Row className="spacing">
            <div className="mainTitle spacing">
                <h1 className="titleStyle">South Asian Minority Knowledge Base</h1>
            </div>
            <div className="motto spacing">
                <h5 className="mottoStyle">The South Asian community has passionately embraced the #blacklivesmatter movement across the world. 
                However, the diaspora assimilated in American society should be made aware of the privilege that they are able to work and become full-fledge citizens because of the 
                1956 Immigration Act that was a direct consequence of Dr. Martin Luther King's activism against
                racial inequality. It is time we start addressing the internal issues faced by Pakistan's minority with 
                the same vigor . It's time we move towards a tolerant society and it starts with educating yourself.
                </h5>
            </div>
            <Col md={4}>
              <Card className="placard-style">
                <Card.Body>
                  <Card.Title>Shi'a and Hazaras</Card.Title>
                  <Button className="info-button" variant="dark"><Link to="/shias">Information</Link></Button>{' '}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="placard-style">
                <Card.Body>
                  <Card.Title>Christians</Card.Title>
                  <Button className="info-button" variant="dark"><Link to="/christians">Information</Link></Button>{' '}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="placard-style">
                <Card.Body>
                  <Card.Title>Siddi</Card.Title>
                  <Button className="info-button" variant="dark"><Link to="/siddi">Information</Link></Button>{' '}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="spacing">
            <Col md={4}>
              <Card className="placard-style">
                <Card.Body>
                  <Card.Title>Sikhs</Card.Title>
                  <Button className="info-button" variant="dark"><Link to="/sikhs">Information</Link></Button>{' '}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="placard-style">
                <Card.Body>
                  <Card.Title>Baluchis & Sindhis</Card.Title>
                  <Button className="info-button" variant="dark"><Link to="/baluchis">Information</Link></Button>{' '}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="placard-style">
                <Card.Body>
                  <Card.Title>Ahmadis</Card.Title>
                  <Button className="info-button" variant="dark"><Link to="/ahmadis">Information</Link></Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          </Container>
        </div>
      );
    }
  }


export default Main;