import React from 'react';
import AsiaBibi from './images/Asia-bibi-memoir.jpg';
import Cornelius from './images/Alvin_robert_cornelius.jpg';
import PunjabiExodus from './images/Punjab-exodus.jpg';
import AsiaProtest from './images/asia-protests.jpg'
import PunPartition from './images/migration-pic.jpg';
import {Link} from "react-router-dom";
import leftArrow from './images/corner-down-left.svg';
import Logo from './logo.svg';

class Christian extends React.Component {
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
                    <div className="button-rect">
                    <a href="https://www.chicagoreviewpress.com/blasphemy-products-9781613748893.php" rel="noopener noreferrer" target="_blank">
                      <p>Blasphemy - A Memoir: Sentenced to Death Over a Cup of Water</p>
                      <div className="image-holder">
                        <img src={AsiaBibi} alt="Blasphemy - A Memoir by Aasia Bibi"/>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <h4 className="section-title">Articles 📰</h4>
                  <div>
                  <div className="button-rect">
                      <a href="https://thewire.in/religion/pakistan-punjabi-christians" rel="noopener noreferrer" target="_blank">
                      <p>Caste Away - The Ongoing Struggle of Pakistan’s Punjabi Christians</p>
                      <div className="art-image-holder">
                        <img src={PunjabiExodus} alt="Ongoing Struccle of Pakistan's Punjabi Christians" />
                      </div>
                      <div style={{marginTop:"10px"}}><sup>Photo by Hania Ansari/Herald</sup></div>
                      </a>
                    </div>
                    <div className="button-rect">
                    <a href="https://www.thenews.com.pk/tns/detail/568846-christians-partitioned-punjab" rel="noopener noreferrer" target="_blank">
                      <p>When Christians were partitioned in the Punjab - I</p>
                      <div className="art-image-holder">
                        <img src={PunPartition} />
                      </div>
                      <div style={{marginTop:"10px"}}><sup>Photo included in The News</sup></div>
                      </a>
                    </div>
                    <div className="button-rect">
                      <a href="https://www.thenews.com.pk/tns/detail/573186-when-christians-were-partitioned-in-th
e-punjab-ii" rel="noopener noreferrer" target="_blank">
                        <p>When Christians were partitioned in the Punjab - II </p>
                        <div className="art-image-holder">
                          <img src={Cornelius} alt="Alvin Robert Cornelius" />
                        </div>
                        <div style={{marginTop:"10px"}}><sup>Photo included in The News</sup></div>
                      </a>
                    </div>
                    <div className="button-rect">
                      <a href="http://america.aljazeera.com/articles/2015/6/18/blasphemy-in-pakistan-the-case-of-aasia-bibi.html" rel="noopener noreferrer" target="_blank" >
                        <p>Blasphemy in Pakistan - The Case of Aasia Bibi</p>
                        <div className="art-image-holder">
                          <img src={AsiaProtest} alt="Blasphemy in Pakistan - The Case of Aasia Bibi" />
                        </div>
                        <div style={{marginTop:"10px"}}><sup>Photo owned by Al Jazeera</sup></div>
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

export default Christian;