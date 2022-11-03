import React from "react";
import "../styles/Benefits.css";

import {BsCheckLg} from 'react-icons/bs'
const Benefits = () => {
  return (
    <div className="container">
      <h1 className="Regular head__glass">What is Salaah?</h1>
      <div className="parent">
        <div className="child">          
          <div className="child__content">
            <BsCheckLg className="child__icon" />
            <div>
              <p className="first__content">Vision</p>
              <p className="second__content">
              We believe that motivation comes through imagination and illustrations, provided with a healthy mentorship on top of it.
              </p>
            </div>
          </div>
          <div className="child__content">
            <BsCheckLg className="child__icon" />
            <div>
              <p className="first__content">Mission</p>
              <p className="second__content">
              We aim to bridge the gap between alumni and students. This can be done by conducting various mentorship sessions.
              </p>
            </div>
          </div>          
        </div>
        <div className="child">
          <div className="child__content">
            <BsCheckLg className="child__icon" />
            <div>
              <p className="first__content">Need</p>
              <p className="second__content">
              Alumni connected with us will be with us in every step we take. As college students we need mentoring for further opportunities.
              </p>
            </div>
          </div>
          <div className="child__content">
            <BsCheckLg className="child__icon" />
            <div>
              <p className="first__content">Our Motto</p>
              <p className="second__content">
              Unlike any other society or club, here, no individual will have a monopoly or authoritative power regarding any major decisions.
              </p>
            </div>
          </div>          
        </div>
        <div className="child">
          <div className="child__content">
            <BsCheckLg className="child__icon" />
            <div>
              <p className="first__content">Connect</p>
              <p className="second__content">
              Our community has a goal to connect all the college students to the great leaders of today, that is our alumni.
              </p>
            </div>
          </div>
          <div className="child__content">
            <BsCheckLg className="child__icon" />
            <div>
              <p className="first__content">Events</p>
              <p className="second__content">
              In this community, we organize multiple mentorship programs which include movies, web series, talk shows, podcasts etc.
              </p>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Benefits;
