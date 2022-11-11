import React from "react";
import "../styles/Team.css";
import AVTR1 from "../assets/kt.jpg";
import AVTR2 from "../assets/vr.jpg";
// import AVTR3 from "../../assets/rs.jpg";
// import AVTR4 from "../../assets/us.jpg";
// import AVTR5 from "../../assets/sv.jpg";
// import AVTR6 from "../../assets/ss.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";

const data = [
  {
    avatar: AVTR1,
    name: "Kunal Tyagi",
    review:
      "The idea behind the SALAAH community of mentorship is only to form a strong network between seniors and juniors to provide the correct career path under the well-settled alumni.",
  },
  {
    avatar: AVTR2,
    name: "Varun Rana",
    review:
      "We form a community under the association of recent pass out senior who is part of big MNC's  and senior who is being passionate to achieve their goals in life. ",
  },
];

const Team = () => {
  return (
    <div className="container">
      <section id="team__parent">
        <h1 className="Regular head__glass" style={{ textAlign: "center" }}>
          Governing Body
        </h1>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          navigation={true}
          grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {data.map(({ avatar, name, comp, review }, index) => {
            return (
              <SwiperSlide key={index} className="team">
                <div className="client__avatar">
                  <img src={avatar} alt="Img1" />
                </div>
                <h5
                  className="client__name"
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.8rem",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {name}
                </h5>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--color-light)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {comp}
                </p>
                <small
                  className="client__review"
                  style={{
                    lineHeight: "25px",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.9rem",
                  }}
                >
                  {review}
                </small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Team;
