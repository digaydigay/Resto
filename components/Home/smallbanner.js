import React from "react";
import Image from "next/image";
import smallbanner from "../../public/assets/smallbanner.jpg";
export default function SmallBanner() {
  return (
    <div className="smallbanner">
      <h1 data-aos="zoom-in" data-aos-duration="1000">
        When you eat food with your family and friends, it always tastes better!
      </h1>
    </div>
  );
}
