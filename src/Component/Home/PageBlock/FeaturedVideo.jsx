import React from "react";
import Slider from "../../Slider/Slider";
import SliderItem from "../../Slider/SliderItem";
import Styles from "./featuredVideo.module.scss";
import { useBreakpoints } from "../../../utils/breakpoints";
const FeaturedVideo = (props) => {
  const { data } = props;
  const { isTabletMid, isTabletCeil } = useBreakpoints();
  const settings_desktop = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "350px",
    slidesToShow: 1,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings_mobile = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settings = isTabletMid ? settings_mobile : settings_desktop;
  return (
    <div className={Styles.feat_video_container}>
      <div className={Styles.feat_header}>
        <h2 className={Styles.feat_heading}>{data.heading}</h2>
        <span className={Styles.feat_subpara}>{data.subheading}</span>
      </div>
      <div className="slick_video_container">
        <Slider {...settings}>
          {data.items.map((item, key) => (
            <SliderItem
              key={key}
              itemType={item.itemType}
              bannerImage={item.image}
            >
              <div className={Styles.playbtn}></div>
              <div className={Styles.fet_video_overlay}>
                <span>{item.title}</span>
              </div>
            </SliderItem>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedVideo;
