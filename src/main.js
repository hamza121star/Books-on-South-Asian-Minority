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
          <Row className="card-spacing">
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
                <div className="placard-style">
                  <Link to="/shias">
                  <div className="cardBody">
                    <h5 className="cardName">Shi'as</h5>
                    <p className="hash-style">#StopShiaGenocide</p>
                  </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="placard-style">
                  <Link to="/christians">
                    <div className="cardBody">
                      <h5 className="cardName">Christians</h5>
                      <p className="hash-style">#StopForcedConversions</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="placard-style">
                  <Link to="/siddi">
                    <div className="cardBody">
                      <h5 className="cardName">Siddi</h5>
                      <p className="hash-style">#Siddi</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="placard-style">
                  <Link to="/ahmadis">
                    <div className="cardBody">
                      <h5 className="cardName">Hindus</h5>
                      <p className="hash-style">#StopForcedConversions</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="card-spacing">
            <Col md={3}>
              <div className="card-wrapper">
                <div className="placard-style">
                  <Link to="/sikhs">
                    <div className="cardBody">
                      <h5 className="cardName">Sikhs</h5>
                      <p className="hash-style">#Sikhs</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="placard-style">
                  <Link to="/baluchis">
                    <div className="cardBody">
                      <h5 className="cardName">Baluchis</h5>
                      <p className="hash-style">#Baluchis</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="placard-style">
                  <Link to="/ahmadis">
                    <div className="cardBody">
                      <h5 className="cardName">Ahmadis</h5>
                      <p className="hash-style">#IStandWithAhmadis</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card-wrapper">
                <div className="placard-style">
                  <Link to="/ahmadis">
                    <div className="cardBody">
                      <h5 className="cardName">Sindhis</h5>
                      <p className="hash-style">#Sindhis</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          </Container>
          <footer>
            <div className="footer-wrapper">
              <span>The content on this website is crowdsourced. Help us spread awareness and reach a greater audience by sharing content and resources with us at contribute@speakupforpakminorities.com</span>
            </div>
          </footer>
        </div>
      );
    }
  }


export default Main;