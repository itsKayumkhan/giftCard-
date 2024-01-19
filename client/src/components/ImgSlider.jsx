import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ImgSlider = () => {
    const img = [
        "https://storage.myphotoprint.in/products/2310241636554161.jpeg",
        "https://storage.myphotoprint.in/products/2310241636573248.jpeg",
        "https://storage.myphotoprint.in/products/2310241637008549.jpeg",
        "https://storage.myphotoprint.in/products/2310241637033287.jpeg",
        
    ]
  return (
    <div className="">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={window.deviceType}
        showDots={true}
      >
        {
            img.map(img=><div className="h-full">
                <img src={img} alt="" />
            </div>)
        }
      </Carousel>
    </div>
  );
};

export default ImgSlider;