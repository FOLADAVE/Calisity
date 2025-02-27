/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Lily Johnson</h3>
                  <span>Calisity, USA</span>
                </div>
              </div>
              <p>Choosing Calisity for my degree was one of my best decisions. The supportive community and academic excellence fully exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Jack Reacher</h3>
                  <span>Calisity, USA</span>
                </div>
              </div>
              <p>The campus facilities at Calisity are top-notch. I have access to all the resources I need to succeed in my studies and extracurricular activities.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Amber Reeds</h3>
                  <span>Calisity, USA</span>
                </div>
              </div>
              <p>Calisity has exceeded my expectations in every way. The diverse student body and inclusive environment make it a great place to learn and grow.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ryan Scott</h3>
                  <span>Calisity, USA</span>
                </div>
              </div>
              <p>Attending Calisity has been a life-changing experience. The opportunities for personal and professional development are endless.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;