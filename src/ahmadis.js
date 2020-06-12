import React from 'react';
import SufismToAhmadiyya from './images/fromSufismToAhmadiyya.jpg';
import {Row, Col} from 'react-bootstrap';
import AhmadiGathering from './images/gatheringAhmadiyyaRabwa.jpg';
import ahmadisExclusion from './images/ahmadis_political_exclusion.jpg';
import mapBalochistan from './images/infographic-balochistan.jpg';
import AsiaProtest from './images/asia-protests.jpg'
import KhalatKhan from './images/Quaid_w_Khan.jpg';
import {Link} from "react-router-dom";
import leftArrow from './images/corner-down-left.svg';

class Ahmadi extends React.Component {
    render() {
      return (
        <div>
          <div className="wrapper">
          <div className="backArrow"> <Link to="/">
            <span className="back-text">Back</span><img src={leftArrow} />  
            </Link>
          </div>
            <div className="instruction">
            <p className="inst-style">Instruction: Hover and click on the cards below to access the resources 👇🏻</p>
             </div>
              <div className="hovercard">
                <div className="section">
                  <h4 className="section-title">Books & Research Papers 📚</h4>
                  <div>
                    <Row className="card-spacing">
                      <Col md={6}>
                        <div className="book-rect">
                        <a href="https://www.amazon.com/Sufism-Ahmadiyya-Muslim-Minority-Movement/dp/0253015235/" rel="noopener noreferrer" target="_blank">
                          <p className="book-title">From Sufism to Ahmadiyya: A Muslim Minority Movement in South Asia | Author: Adil Hussain Khan</p>
                          <div className="image-holder">
                            <img src={SufismToAhmadiyya} alt="From Sufism To Ahmadiyya"/>
                          </div>
                          </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="book-rect">
                        <a href="https://www.amazon.com/Ahmadis-Politics-Religious-Exclusion-Pakistan/dp/178308233X" rel="noopener noreferrer" target="_blank">
                          <p className="book-title">The Ahmadis and the Politics of Religious Exclusion in Pakistan | Author: Ali Usman Qasmi </p>
                          <div className="image-holder">
                            <img src={ahmadisExclusion} alt="Ahmadis Politics Religious Exclusion Pakistan"/>
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
                  <Row className="card-spacing">
                    <Col md={6}>
                      <div className="book-rect">
                        <a href="https://www.dawn.com/news/1057427" rel="noopener noreferrer" target="_blank">
                        <div className="article-title">
                          <p className="book-title">The 1974 ouster of the ‘heretics’: What really happened?</p>
                        </div>
                        <div className="art-image-holder">
                          <img src={AhmadiGathering} alt="Ahmadiyya Gathering at Rabwa" />
                        </div>
                        <div className="mediaOwnership"><sup>A religious gathering of the Ahmadiyya in Rabwa in the 1960s. Photo by Dawn</sup></div>
                        </a>
                      </div>
                    </Col>
                    
                  </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
}

export default Ahmadi;