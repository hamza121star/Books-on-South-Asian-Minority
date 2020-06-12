import React from 'react';
import InsideBalochistan from './images/inside-baluchistan.jpg';
import {Row, Col} from 'react-bootstrap';
import Brahui from './images/Brahui_people_of_Quetta.jpg';
import BalochHistorical from './images/baloch_historical_account.jpg';
import mapBalochistan from './images/infographic-balochistan.jpg';
import AsiaProtest from './images/asia-protests.jpg'
import KhalatKhan from './images/Quaid_w_Khan.jpg';
import {Link} from "react-router-dom";
import leftArrow from './images/corner-down-left.svg';

class Baluchis extends React.Component {
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
                        <a href="https://www.libertybooks.com/index.php?route=product/product&product_id=51889" rel="noopener noreferrer" target="_blank">
                          <p className="book-title">Inside Balochistan | Author: Ahmed Yar Baluch</p>
                          <div className="image-holder">
                            <img src={InsideBalochistan} alt="Inside Baluchistan"/>
                          </div>
                          </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="book-rect">
                        <a href="https://www.amazon.com/Baloch-Balochistan-Historical-Account-Beginning/dp/1466958960" rel="noopener noreferrer" target="_blank">
                          <p className="book-title">The Baloch and Balochistan | Author:  Naseer Dashti </p>
                          <div className="image-holder">
                            <img src={BalochHistorical} alt="Inside Baluchistan"/>
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
                        <a href="https://www.thefridaytimes.com/in-search-of-tamils-cousin-in-pakistan/" rel="noopener noreferrer" target="_blank">
                        <div className="article-title">
                          <p className="book-title">On the Brahui's - In Search of Tamil's cousin in Pakistan</p>
                        </div>
                        <div className="art-image-holder">
                          <img src={Brahui} alt="Ongoing Struccle of Pakistan's Punjabi Christians" />
                        </div>
                        <div className="mediaOwnership"><sup>Photo by Hania Ansari/Herald</sup></div>
                        </a>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="book-rect">
                      <a href="https://nation.com.pk/05-Dec-2015/how-balochistan-became-a-part-of-pakistan-a-historical-perspective" rel="noopener noreferrer" target="_blank">
                        <div className="article-title">
                          <p className="book-title">How Balochistan became a part of Pakistan – a historical perspective</p>
                        </div>
                        <div className="art-image-holder">
                          <img src={KhalatKhan} />
                        </div>
                        <div className="mediaOwnership"><sup>Photo owned and credited to The Nation</sup></div>
                        </a>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="book-rect">
                        <a href="https://carnegieendowment.org/2013/04/11/balochistan-state-versus-nation-pub-51488" rel="noopener noreferrer" target="_blank">
                          <div className="article-title">
                            <p className="book-title">Baluchistan: The State Versus the Nation </p>
                          </div>
                          <div className="art-image-holder">
                            <img src={mapBalochistan} alt="Alvin Robert Cornelius" />
                          </div>
                          <div className="mediaOwnership"><sup>Infographic owned by Dawn</sup></div>
                        </a>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="book-rect">
                        <a href="https://www.dawn.com/news/1356899" rel="noopener noreferrer" target="_blank">
                          <div className="article-title">
                            <p className="book-title">Number of Balochi-speaking people in Balochistan falls</p>
                          </div>
                          <div className="art-image-holder">
                            <img src={mapBalochistan} alt="Alvin Robert Cornelius" />
                          </div>
                          <div className="mediaOwnership"><sup>Infographic owned by Dawn</sup></div>
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

export default Baluchis;