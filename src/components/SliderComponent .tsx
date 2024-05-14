"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlider = () => {
  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // dots: true,
    // arrows: true,
  };

  return (
    <div className="w-full overflow-hidden ">
      <Slider {...settings}>
        <div className="">
          <Image
            className="lg:h-[525px] h-[220px]"
            src={"/images/Hero-Banner 1.png"}
            alt=""
            height={1724}
            width={3456}
          ></Image>
        </div>
        <div className="">
          <Image
            className="lg:h-[525px] h-[220px]"
            src={"/images/Hero-Banner 2.png"}
            alt=""
            height={1724}
            width={3456}
          ></Image>
        </div>
        <div className="">
          <Image
            className="lg:h-[525px] h-[220px]"
            src={"/images/Hero-Banner 3.png"}
            alt=""
            height={1724}
            width={3456}
          ></Image>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
