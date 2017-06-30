import React from 'react';
import Slider from 'react-slick';

export const SimpleImageSlider = (images) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    lazyLoad: true,
    pauseOnHover: true,
    slidesToShow: images.length,
    slidesToScroll: 1
  };

  const sliderImages = images.map((item, key) => {
    return <div key={key}><img src='http://via.placeholder.com/400x300' /></div>;
  });

  return (
    <Slider {...settings}>
      {sliderImages}
    </Slider>
  );
};

export default SimpleImageSlider;