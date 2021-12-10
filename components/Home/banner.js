import React from "react";
import Image from "next/image";
import Banner1 from "../../public/assets/banner1.jpg";
import Banner2 from "../../public/assets/banner2.jpg";

import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <div className="home_banner">
      <Carousel>
        {/* item */}
        <Carousel.Item>
          <Image
            src={Banner1}
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            alt="banner1"
            className="img"
          />

          <Carousel.Caption>
            <h1>We Delever a innovative Dishes</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              expedita unde sequi cum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* item */}
        <Carousel.Item>
          <Image
            src={Banner2}
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            alt="banner2"
            className="img"
          />

          <Carousel.Caption>
            <h1>Health Requires Healthy Food</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              expedita unde sequi cum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
