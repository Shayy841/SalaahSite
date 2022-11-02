import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/Company.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import IMG1 from "../../assets/Cisco-logo.png";
import IMG2 from "../../assets/amazon-logo.png";
import IMG3 from "../../assets/gold-logo.png";
import IMG4 from "../../assets/infosys-logo.png";
import IMG5 from "../../assets/synopsys-logo.png";
import IMG6 from "../../assets/tcs-logo.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Cisco",
    website: "https://www.cisco.com/c/en_in/index.html",
  },
  {
    id: 2,
    image: IMG2,
    title: "Amazon",
    website: "https://www.amazon.jobs/en-gb",
  },
  {
    id: 3,
    image: IMG3,
    title: "Goldman Sachs",
    website: "https://www.goldmansachs.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Infosys",
    website: "https://www.infosys.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Synopsys",
    website: "https://www.synopsys.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "TCS",
    website: "https://www.tcs.com/",
  },
];

const Company = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1
          className="Ultrabold comp"
          style={{ marginTop: "8rem", marginBottom: "7rem" }}
        >
          Companies
        </h1>
      </div>
      <div className="container" style={{ marginBottom: "15%" }}>
        <section id="company">
          <div className="company__container">
            {data.map(({ id, image, title, website }) => {
              return (
                <article key={id} className="company__item">
                  <div className="company__item-image">
                    <img
                      src={image}
                      alt={title}
                      style={{
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </div>
                  <h3>{title}</h3>
                  <div className="company__item-cta">
                    <a href={website} className="btn">
                      Website
                    </a>

                    <Link to={`/company/${id}`} className="btn btn-primary">
                      Guide
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Company;
