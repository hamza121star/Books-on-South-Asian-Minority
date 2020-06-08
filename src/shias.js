import React from 'react';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import RelivingKarbala from './images/reliving-karbala.jpg';
import Wolfgang from './images/pure-muslim-land.jpg';
import Ikhlas from './images/ikhlas-khan.jpg';
import Tanzeela from './images/tanzeela-qambrani.jpg';
import Hosh from './images/HoshMuhammad.jpg'
import SidiFest from './images/sidi-troupe.jpg';

class Shias extends React.Component {
    render() {
      return (
        <div>
        <div className="wrapper">
          <div className="instruction">
          <p className="inst-style">Instruction: Hover and click on the cards below to access the resources 👇🏻
          </p>
         </div>
          <div className="hovercard">
            <div className="section">
              <h4 className="section-title">Books & Research Papers 📚</h4>
              <div>
                <div className="button-rect">
                <a href="https://www.amazon.com/Syed-Akbar-Hyder/dp/0195373022" rel="noopener noreferrer" target="_blank">
                  <p>Reliving Karbala - Martyrdom in South Asian Memory | Author: Syed Akbar Hyder</p>
                  <div className="image-holder">
                    <img src={RelivingKarbala} />
                  </div>
                  </a>
                </div>
                <div className="button-rect">
                <a href="https://www.amazon.com/Pure-Muslim-Land-Pakistan-Civilization/dp/1469649799" rel="noopener noreferrer" target="_blank">
                  <p>In a Pure Muslim Land: Shi’ism between Pakistan and the Middle East | Author: Simon Wolfgang Fuchs</p>
                  <div className="image-holder">
                    <img src={Wolfgang} />
                  </div>
                  </a>
                </div>
                <div className="button-rect">
                  <a href="https://www.sciencedirect.com/science/article/pii/S0002929717303944#bib26" rel="noopener noreferrer" target="_blank">
                    <p style={{lineHeight:"1.5rem"}}>Topic: The Genetic Legacy of the Indian Ocean Slave Trade: Recent Admixture and Post-admixture Selection in the Makranis of Pakistan
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="section">
              <h4 className="section-title">Articles 📰</h4>
              <div>
                <div className="button-rect">
                <a href="https://qz.com/india/440978/meet-the-fast-disappearing-community-of-indians-and-pakistanis-of-african-origin/" rel="noopener noreferrer" target="_blank">
                  <p>Topic: Meet the fast disappearing community of Indians and Pakistanis of African 
                    origin
                  </p>
                  <div className="art-image-holder">
                    <img src={SidiFest} />
                  </div>
                  <div style={{marginTop:"10px"}}><sup>Photo owned by Quartz India</sup></div>
                  </a>
                </div>
                <div className="button-rect">
                  <a href="https://madrascourier.com/biography/ikhlas-khanthe-abyssinian-who-ruled-the-deccan/" rel="noopener noreferrer" target="_blank">
                  <p>Topic: Ikhlas Khan - The Abyssinian who ruled the Deccan</p>
                  <div className="art-image-holder">
                    <img src={Ikhlas} />
                  </div>
                  <div style={{marginTop:"10px"}}><sup>Photo owned by The Met Museum</sup></div>
                  </a>
                </div>
                <div className="button-rect">
                  <a href="http://www.theasian.asia/archives/86486" rel="noopener noreferrer" target="_blank">
                    <p>Topic: African presence in Sindh</p>
                    <div className="art-image-holder">
                      <img src={Hosh} />
                    </div>
                    <div style={{marginTop:"10px"}}><sup>Photo owned by The AsiaN</sup></div>
                  </a>
                </div>
                <div className="button-rect">
                  <a href="https://thediplomat.com/2018/09/meet-the-first-african-pakistani-lawmaker/" rel="noopener noreferrer" target="_blank" >
                    <p>Topic: Tanzeela Qambrani’s election as MP</p>
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
      )
    }
}

export default Shias;