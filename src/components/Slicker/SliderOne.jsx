import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./SliderOne.css";

// const SliderOne = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 5000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };
//   return (
//     <div className="sliderdiv">
//       <Slider {...settings}>
//         <div>
//           <img
//             className="image1"
//             src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hhm-2022-hero-des-2.jpg?v=1663264616"
//             alt="prd"
//           />
// =======
const SliderOne = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="sliderdiv">
      <Slider {...settings}>
        <div>
          <img
            className="image1"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hhm-2022-hero-des-2.jpg?v=1663264616"
            alt="prd"
          />
        </div>
        <div className="parent1">
          <img
            className="image3"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/beauty-alfresco-center.svg?v=1651258769"
            alt="prds"
          />
          <img
            className="image2"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/beauty-alfresco-hero-des-content_592b02fe-bfb8-4358-bf3d-048500db9ab7.jpg?v=1652907052"
            alt="img"
          />
        </div>

        {/* <div className="parent1">
          <img
            className="image3"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/beauty-alfresco-center.svg?v=1651258769"
            alt="prds"
          />
          <img
            className="image2"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/beauty-alfresco-hero-des-content_592b02fe-bfb8-4358-bf3d-048500db9ab7.jpg?v=1652907052"
            alt="img"
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default SliderOne;
