import React from 'react';
import {Row, Col} from 'react-bootstrap';
import RelivingKarbala from './images/reliving-karbala.jpg';
import Wolfgang from './images/pure-muslim-land.jpg';
import ValiNasr from './images/Shia-Revival.jpg';
import NisarHaveli from './images/nisar-haveli.jpg';
import HazaraRights from './images/hazara-rights.jpg'
import SidiFest from './images/sidi-troupe.jpg';
import {Link} from "react-router-dom";
import leftArrow from './images/corner-down-left.svg';


class Shias extends React.Component {
    render() {
      return (
        <div>
        <div className="wrapper">
          <div className="backArrow"> <Link to="/">
            <span className="back-text">Back</span><img src={leftArrow} />  
            </Link>
          </div>
          <div className="instruction">
          <p className="inst-style">Instruction: Hover and click on the cards below to access the resources <span role="img">👇🏻</span>
          </p>
         </div>
          <div className="hovercard">
            <div className="section">
              <h4 className="section-title">Books & Research Papers <span role="img">📚</span></h4>
              <div>
              <Row className="card-spacing">
                <Col md={6}>
                  <div className="book-rect">
                    <a href="https://www.amazon.com/Syed-Akbar-Hyder/dp/0195373022" rel="noopener noreferrer" target="_blank">
                      <p className="book-title">Reliving Karbala - Martyrdom in South Asian Memory | Author: Syed Akbar Hyder</p>
                      <div className="image-holder">
                        <img src={RelivingKarbala} />
                      </div>
                    </a>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="book-rect">
                    <a href="https://www.amazon.com/Pure-Muslim-Land-Pakistan-Civilization/dp/1469649799" rel="noopener noreferrer" target="_blank">
                    <p className="book-title">In a Pure Muslim Land: Shi’ism between Pakistan and the Middle East | Author: Simon Wolfgang Fuchs</p>
                    <div className="image-holder">
                      <img src={Wolfgang} />
                    </div>
                    </a>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="book-rect">
                    <a href="https://www.readings.com.pk/pages/BookDetails.aspx?BookID=291128" rel="noopener noreferrer" target="_blank">
                      <p className="book-title">The Shia Revival: How Conflicts Within Islam Will Shape The Future | Author: Vali Nasr
                      </p>
                      <div className="image-holder">
                      <img src={ValiNasr} />
                    </div>
                    </a>
                  </div>
                </Col>
              </Row>
              </div>
            </div>
            <div className="section">
              <h4 className="section-title">Articles <span role="img">📰</span></h4>
              <div>
                <div className="button-rect">
                <a href="https://www.dawn.com/news/1504593" rel="noopener noreferrer" target="_blank">
                  <p>How to be a Shia in Pakistan</p>
                  <div className="art-image-holder">
                    <img src={NisarHaveli} />
                  </div>
                  <div style={{marginTop:"10px"}}><sup>Photo owned by Dawn</sup></div>
                  </a>
                </div>
                <div className="button-rect">
                  <a href="https://nchr.gov.pk/wp-content/uploads/2019/01/HAZARA-REPORT.pdf" rel="noopener noreferrer" target="_blank">
                  <p>Understanding the agonies of the ethnic Hazaras</p>
                  <div className="art-image-holder">
                    <img src={HazaraRights} />
                  </div>
                  <div style={{marginTop:"10px"}}><sup>Photo owned by Human Rights Pakistan</sup></div>
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

export default Shias;