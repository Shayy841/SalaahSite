import React from "react";
import "../../styles/mentors.css";
import { FiLinkedin } from "react-icons/fi";

const mentors = (props) => {
  return (
    <>
      <div className="">
        <div className="try ">
          <div className="card__parent">
            <div className="cards">
              <img className="card-image" src={props.img} alt="" />
              <div className="card-content">
                <h2 className="card-heading">{props.name}</h2>
                <a href={props.link} className="btn card-a">
                  Find out more
                  <span className="material-symbols-outlined">
                    <FiLinkedin />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default mentors;
