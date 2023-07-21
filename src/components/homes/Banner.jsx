import React from "react";
import {
  BannerContainer,
  BannerSection,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerBody,
} from "../../styles/homestyles/banner";

const BANNER_IMAGES = [
  "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide1-img.png",
  "https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide2-img1.png",
  "https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide3-img.jpg",
];

function Banner() {
  return (
    <BannerContainer>
      <BannerSection>
        <BannerContent>
          <BannerTitle>TEST</BannerTitle>
          <BannerBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores velit vero?
          </BannerBody>
        </BannerContent>
        <BannerImage src={BANNER_IMAGES[0]}></BannerImage>
      </BannerSection>
    </BannerContainer>
  );
}

export default Banner;
