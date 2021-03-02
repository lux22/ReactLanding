import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = React.forwardRef((props, ref) => {
  const { children, ...restProps } = props;

  var settings = {
    infinite: true,
    lazyLoad: true,
    nav: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    ...restProps,
  };

  return (
    <>
      <Slider {...settings} ref={ref}>
        {children}
      </Slider>
    </>
  );
});

export default SlickSlider;
