import React from 'react';
import './Plans.css';
import whiteTick from '../../assets/img/whiteTick.png';
import arrow from '../../assets/img/rightArrow.png';
import { plansData } from '../../data/plansData';
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      <div className="plans-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* plans  */}
      <div className="plans">
        {plansData.map((plans, i) => (
          <div className="plan" key={i}>
            {plans.icon}
            <span>{plans.name}</span>
            <span>$ {plans.price}</span>
            <div className="features">
              {plans.features.map((feature) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="see-more">
              <span>See more benefits </span>
              <img src={arrow} alt="" />
            </div>
            <button className="btn">Join Now </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
