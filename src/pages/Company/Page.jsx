import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { compdata } from "./compdata";
import Navbar from "../../components/Navbar";
import "../../styles/Page.css";
import Footer from "../../components/Footer";
import HomeLast from "../../components/HomeLast";

const Page = () => {
  const { id } = useParams();
  const [com, setCom] = useState(null);

  useEffect(() => {
    let com = compdata.find((com) => com.id === parseInt(id));
    if (com) {
      setCom(com);
    }
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      {com ? (
        <div>
          <img src={com.cover} alt="" className="hero-comp-img" />
          <div className="container">
            <h1
              className="Ultrabold"
              style={{
                fontSize: "3rem",
                marginTop: "3rem",
                marginBottom: "4rem",
                textAlign: "center",
              }}
            >
              {com.company}
            </h1>
            <p
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.1rem" }}
            >
              {com.about}
            </p>
            <h3
              className="Regular"
              style={{
                fontSize: "2rem",
                marginTop: "8rem",
                marginBottom: "2rem",
              }}
            >
              Recruitment Process
            </h3>
            <h5
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              {com.jd}
            </h5>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                marginTop: "4rem",
                marginBottom: "2rem",
                fontSize: "1.1rem",
              }}
            >
              {com.process}
            </p>
            <h3
              className="Regular"
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "6rem",
                marginBottom: "5rem",
              }}
            >
              Our Mentors
            </h3>
            {com.mentors}
          </div>
          <HomeLast />
          <Footer />
        </div>
      ) : (
        <h1
          className="Ultrabold"
          style={{
            fontSize: "3rem",
            marginTop: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          {" "}
          System Error{" "}
        </h1>
      )}
    </>
  );
};

export default Page;
