import React from 'react';
import './Programs.css';
import RightArrow from '../../assets/img/rightArrow.png';
import { programsData } from '../../data/programsData';
const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* header  */}
      <div className="programs-header">
        <span className="stroke-text"> Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      <div className="programs-catagories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              Join Now <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
