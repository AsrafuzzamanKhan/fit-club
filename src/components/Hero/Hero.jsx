import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_img from '../../assets/img/hero_image.png';
import hero_img_back from '../../assets/img/hero_image_back.png';
import Heart from '../../assets/img/heart.png';
import Calories from '../../assets/img/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div>
      <div className="hero" id="home">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />
          {/* the best ad  */}
          <div className="the-best-ad">
            <motion.div
              initial={{ left: mobile ? '178px' : '238px' }}
              whileInView={{ left: '8px' }}
              transition={{ ...transition, type: 'tween' }}
            ></motion.div>
            <span>The Best Fitness Club In The Town</span>
          </div>
          {/* hero heading  */}
          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape</span>
              <span> Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>
                In there we help you to shape and build your ideal body and live
                up your life to fullest
              </span>
            </div>
          </div>
          {/* figure  */}
          <div className="figures">
            <div>
              <span>
                <NumberCounter end={140} start={100} delay={5} preFix="+" />
              </span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>
                <NumberCounter end={978} start={920} delay={5} preFix="+" />
              </span>
              <span> Members Joined</span>
            </div>
            <div>
              <span>
                <NumberCounter end={50} start={25} delay={5} preFix="+" />
              </span>
              <span>Fitness Programs</span>
            </div>
          </div>
          {/* hero button  */}
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/* right side  */}
        <div className="right-h">
          <button className="btn">Join Now</button>
          <motion.div
            className="heart-rate"
            initial={{ right: '-1rem' }}
            whileInView={{ right: '4rem' }}
            transition={transition}
          >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          {/* hero img  */}
          <img src={hero_img} alt="" className="hero-image" />
          <motion.img
            initial={{ right: '11rem' }}
            whileInView={{ right: '20rem' }}
            transition={transition}
            src={hero_img_back}
            alt=""
            className="hero-image-back"
          />
          {/* calories
           */}
          <motion.div
            className="calories"
            initial={{ right: '37rem' }}
            whileInView={{ right: '28rem' }}
            transition={transition}
          >
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 Kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
