import React from 'react';
import './Reasons.css';
import img1 from '../../assets/img/image1.png';
import img2 from '../../assets/img/image2.png';
import img3 from '../../assets/img/image3.png';
import img4 from '../../assets/img/image4.png';
import tick from '../../assets/img/tick.png';
import adidas from '../../assets/img/adidas.png';
import nb from '../../assets/img/nb.png';
import nick from '../../assets/img/nike.png';
const Reasons = () => {
  return (
    <div className="reasons" id="whyUs">
      <div className="left-r">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>Choose Us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: 'var(--gray)',
            fontSize: '1rem',
            gap: '1rem',
          }}
        >
          Our Partners
        </span>
        <div className="partner">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nick} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
