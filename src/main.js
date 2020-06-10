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
            <div className="mainTitle">
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
            <Col md={3}>
              <div className="card-wrapper">
                <div className="hashtag-holder">
                  <p className="hash-style">#StopShiaKillings</p>
                </div>
                <Card className="placard-style">
                  <Link to="/shias">
                  <Card.Body>
                    <h5 className="cardName">Shi'as</h5>
                  </Card.Body>
                  </Link>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="hashtag-holder">
                  <p className="hash-style">#StopForcedConversions</p>
                </div>
                <Card className="placard-style">
                  <Link to="/christians">
                    <Card.Body className="cardBody">
                      <h5 className="cardName">Christians</h5>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="hashtag-holder">
                  <p className="hash-style">#Siddi</p>
                </div>
                <Card className="placard-style">
                  <Link to="/siddi">
                  <Card.Body className="cardBody">
                    <h5 className="cardName">Siddi</h5>
                  </Card.Body>
                  </Link>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="hashtag-holder">
                  <p className="hash-style">#StopForcedConversions</p>
                </div>
                <Card className="placard-style">
                  <Link to="/ahmadis">
                    <Card.Body className="cardBody">
                      <h5 className="cardName">Hindus</h5>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            </Col>
          </Row>
          <Row className="spacing">
            <Col md={3}>
              <div className="card-wrapper">
                <div className="hashtag-holder">
                  <p className="hash-style">#Sikhs</p>
                </div>
                <Card className="placard-style">
                  <Link to="/sikhs">
                    <Card.Body className="cardBody">
                      <h5 className="cardName">Sikhs</h5>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="hashtag-holder">
                  <p className="hash-style">#Baluchis</p>
                </div>
                <Card className="placard-style">
                  <Link to="/baluchis">
                    <Card.Body className="cardBody">
                      <h5 className="cardName">Baluchis</h5>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="hashtag-holder">
                  <p className="hash-style">#AhmadisAreHumansToo</p>
                </div>
                <Card className="placard-style">
                  <Link to="/ahmadis">
                    <Card.Body className="cardBody">
                      <h5 className="cardName">Ahmadis</h5>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="hashtag-holder">
                  <p className="hash-style">#Sindhis</p>
                </div>
                <Card className="placard-style">
                  <Link to="/ahmadis">
                    <Card.Body className="cardBody">
                      <h5 className="cardName">Sindhis</h5>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            </Col>
          </Row>

          </Container>
        </div>
      );
    }
  }


export default Main;