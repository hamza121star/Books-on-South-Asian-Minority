import React from 'react';
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
            <img src={leftArrow} /> <span className="back-text">Go Back</span> 
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
                  <a href="https://www.readings.com.pk/pages/BookDetails.aspx?BookID=291128" rel="noopener noreferrer" target="_blank">
                    <p style={{lineHeight:"1.5rem"}}>The Shia Revival: How Conflicts Within Islam Will Shape The Future | Author: Vali Nasr
                    </p>
                    <div className="image-holder">
                    <img src={ValiNasr} />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="section">
              <h4 className="section-title">Articles 📰</h4>
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