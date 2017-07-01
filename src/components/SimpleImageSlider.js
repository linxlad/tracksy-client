import React, { PureComponent } from 'react';
import Slider from 'react-slick';

export class SimpleImageSlider extends PureComponent {
  renderImage = (image, key) => {
    return <div key={key}><img src={image} /></div>;
  };

  render() {
    const { images } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      lazyLoad: true,
      pauseOnHover: true,
      slidesToShow: 6,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        { images.map((image, key) => this.renderImage(image, key)) }
      </Slider>
    );
  }
}