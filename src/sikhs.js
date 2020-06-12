import React from 'react';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import Nanak from './images/walking-with-nanak.jpg';
import Kartarpur from './images/kartarpur-sahib.jpg';
import MughalSikh from './images/mughal-sikh.jpg'
import SikhProtest from './images/sikh-protest.jpg';
import leftArrow from './images/corner-down-left.svg';
import {Link} from "react-router-dom";


class Sikhs extends React.Component {
    render() {
      return (
          <div>
              <div className="wrapper">
              <div className="backArrow"> <Link to="/">
                <span className="back-text">Back</span><img src={leftArrow} />  
                </Link>
              </div>
              <div className="instruction">
              <p className="inst-style">Instruction: Hover and click on the cards below to access the resources 👇🏻
              </p>
             </div>
              <div className="hovercard">
                <div className="section">
                  <h4 className="section-title">Books & Research Papers 📚</h4>
                  <div>
                  <Row className="card-spacing">
                    <Col md={6}>
                      <div className="book-rect">
                      <a href="http://libertybooks.info/Walking-with-Nanak-41238" rel="noopener noreferrer" target="_blank">
                        <p className="book-title">Walking with Nanak | Author: Haroon Khalid</p>
                        <div className="image-holder">
                          <img src={Nanak} />
                        </div>
                        </a>
                      </div>
                    </Col>
                    </Row>
                  </div>
                </div>
                <div className="section">
                  <h4 className="section-title">Articles 📰</h4>
                  <div>
                    <div className="button-rect">
                      <a href="https://theprint.in/theprint-essential/the-religious-and-historical-significance-of-pakistans-kartarpur-sahib-gurudwara/316523/" rel="noopener noreferrer" target="_blank">
                      <p className="book-title">The Religious and historical significance of the pakistans kartarpur sahib gurudwara</p>
                      <div className="art-image-holder">
                        <img src={Kartarpur} />
                      </div>
                      <div style={{marginTop:"10px"}}><sup>@ImranKhanPTI | Twitter</sup></div>
                      </a>
                    </div>
                    <div className="button-rect">
                      <a href="https://thewire.in/history/guru-arjan-martyrdom-colonial-historiography" rel="noopener noreferrer" target="_blank">
                      <p className="book-title">Time to Rescue South Asia's Muslims and Sikhs from Divide-and-Rule Historiography</p>
                      <div className="art-image-holder">
                        <img src={MughalSikh} />
                      </div>
                      <div style={{marginTop:"10px"}}><sup>Photo owned by Kit Suman/Unsplash</sup></div>
                      </a>
                    </div>
                    <div className="button-rect">
                      <a href="https://gandhara.rferl.org/a/pakistan-sikh-hindus-balochistan/28317151.html" rel="noopener noreferrer" target="_blank">
                      <p className="book-title">Minority Sikhs, Hindus Flee Pakistan’s Restive Balochistan</p>
                      <div className="art-image-holder">
                        <img src={SikhProtest} />
                      </div>
                      <div style={{marginTop:"10px"}}><sup>Photo owned by Gandhara</sup></div>
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
       
    }
}

export default Sikhs;