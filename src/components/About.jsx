import React from "react";
import "../styles/About.css";
import logo from "../assets/groupp.jpg";
const About = () => {
  return (
    <div className="grand_parent">
      <div className="container about__container">
        <div className="about__left">
          <h1 className="Ultrabold">The community</h1>
          <h1 className="Ultrabold">that aims big.</h1>
          <img src={logo} className='about__image' alt='' />          
        </div>
        <div className="about__right">
          <div className="about__content">
            <h3 className="Light">We Aim.</h3>
            <p className="Regular">
              Here, we connect present students
with the alumni to get guidance about the career which they want to
pursue further.
            </p>
          </div>
          <hr />
          <div className="about__content">
            <h3 className="Light">We Grow.</h3>
            <p className="Regular">
              Here, we understand the value of personal growth. We empower our
              students with proper guidance and training opportunities, workshops and
              continuous mentoring to ensure they have everything they need to
              succeed.
            </p>
          </div>
          <hr />
          <div className="about__content">
            <h3 className="Light">We Win.</h3>
            <p className="Regular">
              Here, we believe in improving ourself day by day so that our success gets assured with our immense efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
