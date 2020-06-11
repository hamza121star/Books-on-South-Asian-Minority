import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Arundhati from './images/god-of-small-things.jpg';
import Shiva from './images/in-search-shiva.jpg';
import Shashi from './images/shashi-tharoor-book.jpg';
import Ikhlas from './images/ikhlas-khan.jpg';
import Tanzeela from './images/tanzeela-qambrani.jpg';
import Hosh from './images/HoshMuhammad.jpg'
import SidiFest from './images/sidi-troupe.jpg';
import leftArrow from './images/corner-down-left.svg';
import {Link} from "react-router-dom";
import Logo from './logo.svg';

class Hindus extends React.Component {
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
                      <a href="https://www.readings.com.pk/pages/BookDetails.aspx?BookID=940654" rel="noopener noreferrer" target="_blank">
                        <p className="book-title">The God of Small Things, Author: Arundhathi Roy</p>
                        <div className="image-holder">
                          <img src={Arundhati} />
                        </div>
                        </a>
                      </div>
                    </Col>
                      <Col md={6}>
                        <div className="book-rect">
                          <a href="http://libertybooks.info/In-Search-of-Shiva:-A-Study-of-Folk-Religious-Practices-in-Pakistan-27457" rel="noopener noreferrer" target="_blank">
                            <p className="book-title">In Search of Shiva: A Study of Folk Religious Practices in Pakistan | Author: Haroon Khalid</p>
                            <div className="image-holder">
                              <img src={Shiva} />
                            </div>
                          </a>
                        </div>
                      </Col>
                      <Col md={6}>
                      <div className="book-rect">
                        <a href="http://libertybooks.info/Why-I-Am-a-Hindu-44231?search=shashi%20tharoor&category_id=0" rel="noopener noreferrer" target="_blank">
                          <p className="book-title">Why I am a hindu | Author: Shashi Tharoor </p>
                          <div className="image-holder">
                              <img src={Shashi} />
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
                      <a href="https://www.timesnownews.com/spiritual/religion/article/hinglaj-mata-mandir-do-you-know-about-this-shakti-peetha-in-pakistan/468324" rel="noopener noreferrer" target="_blank">
                      <p>Do you know about this Shakti Peetha in Pakistan?</p>
                      <div className="art-image-holder">
                        <img src={Ikhlas} />
                      </div>
                      <div style={{marginTop:"10px"}}><sup>Photo owned by The Met Museum</sup></div>
                      </a>
                    </div>
                    <div className="button-rect">
                    <a href="https://qz.com/india/440978/meet-the-fast-disappearing-community-of-indians-and-pakistanis-of-african-origin/" rel="noopener noreferrer" target="_blank">
                      <p>Meet the fast disappearing community of Indians and Pakistanis of African 
                        origin
                      </p>
                      <div className="art-image-holder">
                        <img src={SidiFest} />
                      </div>
                      <div style={{marginTop:"10px"}}><sup>Photo owned by Quartz India</sup></div>
                      </a>
                    </div>
                    <div className="button-rect">
                      <a href="http://www.theasian.asia/archives/86486" rel="noopener noreferrer" target="_blank">
                        <p>African presence in Sindh</p>
                        <div className="art-image-holder">
                          <img src={Hosh} />
                        </div>
                        <div style={{marginTop:"10px"}}><sup>Photo owned by The AsiaN</sup></div>
                      </a>
                    </div>
                    <div className="button-rect">
                      <a href="https://thediplomat.com/2018/09/meet-the-first-african-pakistani-lawmaker/" rel="noopener noreferrer" target="_blank" >
                        <p>Tanzeela Qambrani’s election as MP</p>
                        <div className="art-image-holder">
                          <img src={Tanzeela} />
                        </div>
                        <div style={{marginTop:"10px"}}><sup>Photo owned by Dawn News</sup></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
}

export default Hindus;