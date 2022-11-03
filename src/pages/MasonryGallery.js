import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Masonry from "@mui/lab/Masonry/Masonry";
import "../styles/gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import {BsFillSuitHeartFill} from 'react-icons/bs';
// Import Swiper styles
import "swiper/css";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import random from "../assets/group.jpg";
import one from "../assets/car1.jpg";
import two from "../assets/car2.jpg";
import three from "../assets/car3.jpg";
import four from "../assets/car4.jpg";

const itemData = [
  {
    id: 1,
    img: "https://drive.google.com/uc?export=view&id=1YNTjP_dl7nXvyef2OrgZ3Hprvk52YrgM",
    title: "",
    likes: 0,
  },
  {
    id: 2,
    img: "https://drive.google.com/uc?export=view&id=1Tw-HEx75vrq-xDZsAtP4igXsMnabv6JZ",
    title: "",
    likes: 0,
  },
  {
    id: 3,
    img: "https://drive.google.com/uc?export=view&id=1R2fgnVGggPdBFZbWIz9cpdS3G0dg7s9t",
    title: "",
    likes: 0,
  },
  {
    id: 4,
    img: "https://drive.google.com/uc?export=view&id=1lJwgI_g5tdTfChPCnTU9hW7s7kcwgzMQ",
    title: "",
    likes: 0,
  },
  {
    id: 5,
    img: "https://drive.google.com/uc?export=view&id=17L0h9nHH-jC7Loaox_Dutww3Eqbq283Z",
    title: "",
    likes: 0,
  },

  {
    id: 6,
    img: "https://drive.google.com/uc?export=view&id=1WvQvJ5DNXEAppF4jEdCpfHfhX-JxlC4q",
    title: "",
    likes: 0,
  },
  {
    id: 7,
    img: "https://drive.google.com/uc?export=view&id=1Cp8bK92mSKahEMnb1FkbX-Z3yMZZtZ8V",
    title: "",
    likes: 0,
  },
  {
    id: 8,
    img: "https://drive.google.com/uc?export=view&id=1tb1lEAs8a3jz_aH3VE-qaABE6MrHkYs9",
    title: "",
    likes: 0,
  },
  {
    id: 9,
    img: "https://drive.google.com/uc?export=view&id=1s1eMOniH9K0L7c3UjX1EVjhZzBtenaX6",
    title: "",
    likes: 0,
  },
  {
    id: 10,
    img: "https://drive.google.com/uc?export=view&id=1RWXRFWtCOuIoxmd4AyLI2aGIFOUmWGJM",
    title: "",
    likes: 0,
  },
  {
    id: 11,
    img: "https://drive.google.com/uc?export=view&id=1CwJkVnhkUiuspTSpdLo-FtbzB5kXVR83",
    title: "",
    likes: 0,
  },
  {
    id: 12,
    img: "https://drive.google.com/uc?export=view&id=1suQVKC9ZaSFRhmP7UsH2q6yQOIF4d8hK",
    title: "",
    likes: 0,
  },
  {
    id: 13,
    img: "https://drive.google.com/uc?export=view&id=166Gg8iVLyTHXHRWlSonI1L4MUM_3b-LP",
    title: "",
    likes: 0,
  },
  {
    id: 14,
    img: "https://drive.google.com/uc?export=view&id=13Must82JcVE-dBimA1B64YrS8I7CVXEu",
    title: "",
    likes: 0,
  },
  {
    id: 15,
    img: "https://drive.google.com/uc?export=view&id=1y014amyySESTm2Awyn44TcaJxZz-8S7r",
    title: "",
    likes: 0,
  },
  {
    id: 16,
    img: "https://drive.google.com/uc?export=view&id=1gEVvzaSLcU_lRPoybrp4XA27vLoUhZc2",
    title: "",
    likes: 0,
  },
  {
    id: 17,
    img: "https://drive.google.com/uc?export=view&id=1U4a1ksH1BSP5TQ0SKc8pBOHHSZusQFGj",
    title: "",
    likes: 0,
  },

  {
    id: 18,
    img: "https://drive.google.com/uc?export=view&id=1LaLrPDBCmRRa4qagvNeXEge1yVmPCZWS",
    title: "",
    likes: 0,
  },
  {
    id: 19,
    img: "https://drive.google.com/uc?export=view&id=1rRbQk93l2itcOn4ZxBAP5_VcFiNtC_De",
    title: "",
    likes: 0,
  },
  {
    id: 20,
    img: "https://drive.google.com/uc?export=view&id=1yO-bcmHmW4l8Uvot31F6O8TUcAvvmShp",
    title: "",
    likes: 0,
  },
  {
    id: 21,
    img: "https://drive.google.com/uc?export=view&id=10-buWNohMlCUam5jXfrhJbD5lasgSdzh",
    title: "",
    likes: 0,
  },
  {
    id: 22,
    img: "https://drive.google.com/uc?export=view&id=1toJCdS_QzXz1fVlCul7lItCyOI4AurRc",
    title: "",
    likes: 0,
  },
  {
    id: 23,
    img: "https://drive.google.com/uc?export=view&id=1LWCvZJDlptOUS6cNU_AKvqUVjsgRRYas",
    title: "",
    likes: 0,
  },
  {
    id: 24,
    img: "https://drive.google.com/uc?export=view&id=1fFA4FEWpT5IxVFylfs0TSbGQ7LJyYb5e",
    title: "",
    likes: 0,
  },
  {
    id: 25,
    img: "https://drive.google.com/uc?export=view&id=1CESux8F0ivOqDyMh3UlkkGsW8TqWXlvi",
    title: "",
    likes: 0,
  },
  {
    id: 26,
    img: "https://drive.google.com/uc?export=view&id=1xII2XgmOYKD0bX6x_GTX1T3obnwsSTbY",
    title: "",
    likes: 0,
  },
  {
    id: 27,
    img: "https://drive.google.com/uc?export=view&id=1sdbSITZrg_XuN_eCUEIFh5KItele5MB5",
    title: "",
    likes: 0,
  },
  {
    id: 28,
    img: "https://drive.google.com/uc?export=view&id=1g1fYjJw_U13jyglVhP-cCxYSVqJLd_xH",
    title: "",
    likes: 0,
  },
  {
    id: 29,
    img: "https://drive.google.com/uc?export=view&id=1nVOAzgrnJYOFG4XaWyr_uBoAguDvP1iw",
    title: "",
    likes: 0,
  },
  {
    id: 30,
    img: "https://drive.google.com/uc?export=view&id=1lJwgI_g5tdTfChPCnTU9hW7s7kcwgzMQ",
    title: "",
    likes: 0,
  },
  {
    id: 31,
    img: "https://drive.google.com/uc?export=view&id=1n-TmxSN7GKtZ4fw0YNfZ6mc2VZeDRn3g",
    title: "",
    likes: 0,
  },
  {
    id: 32,
    img: "https://drive.google.com/uc?export=view&id=1vvk4ZmPnVlyjjak2ZpkiTvMxJ7Sfwiis",
    title: "",
    likes: 0,
  },
];

const MasonryGallery = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        console.log("click");
        break;
      case 2:
        console.log("dbl click");
        setCount(count + 1);
        setIsActive((current) => !current);
        break;
      case 3:
        console.log("triple click");
        break;
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper car__head"
        >
          <SwiperSlide>
            <img className="swiper-images" src={random} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-images" src={three} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-images" src={four} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-images" src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-images" src={two} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1
        className="Ultrabold gallery"
        style={{ marginTop: "6rem", marginBottom: "4rem" }}
      >
        Events at Salaah!
      </h1>
      <div style={{ margin: "auto" }}>
        <Masonry
          columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {itemData.map((item, index) => (
            <div key={index}>
              <div className="cards-gallery" onClick={handleClick}>
                <img
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="all__img cards-gallery-img"
                  onClick={handleOpen}
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                    margin: "inherit",
                    cursor: "pointer",
                  }}
                />
                <div className="card-content-gallery">
                  <div key={index} className="card-gallery-like">
                    <div
                      className="checkbox"
                      style={{
                        display: isActive ? "block" : "none",
                        transition: isActive ? "all 100ms ease-in" : "",
                      }}
                      onClick={handleClick}
                    >
                      <BsFillSuitHeartFill size={25} className="like-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      <Footer />
    </div>
  );
};

export default MasonryGallery;
