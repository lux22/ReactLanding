import { useRef } from "react";
import Slider from "../../Slider/Slider";
import TextInput from "../../Input/TextInput";
import { mergeClasses } from "../../../classify";
import { SliderItem } from "../../Slider/SliderItem";
import defaultClasses from "./banner.module.scss";
import Button from "../../Button/Button";
import { useBreakpoints } from "../../../utils/breakpoints";
import Icon from "../../../utils/icon";
const Banner = (props) => {
  const { slider1, slider2 } = props;

  const slides1 = useRef(null);
  const slides2 = useRef(null);

  const { isLaptopCeil } = useBreakpoints();
  // console.log(isLaptopCeil);
  const settings = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const classes = mergeClasses(defaultClasses);

  const prevArrow = () => {
    if (isLaptopCeil !== false) slides2.current.slickPrev();
    slides1.current.slickPrev();
  };

  const nextArrow = () => {
    if (isLaptopCeil !== false) slides2.current.slickNext();
    slides1.current.slickNext();
  };

  return (
    <div className={classes.main_slides}>
      <Slider ref={slides1}>
        {slider1.map((item, key) => (
          <div className={classes.overlay}>
            <SliderItem
              key={key}
              itemType={item.itemType}
              bannerImage={item.bannerImage}
            >
              <div className={classes.overlayText}>
                <div className="text_content">
                  <h2 className={classes.headerText}>{item.title}</h2>
                  <p className={classes.overlayPara}>{item.para}</p>
                  <Button type="button" priority="high">
                    Contact
                  </Button>
                </div>
              </div>
            </SliderItem>
          </div>
        ))}
      </Slider>
      <div className={"container " + classes.search_container}>
        <TextInput
          className={{
            wrapper: classes.wrapper,
            input: classes.input,
            field: classes.field,
          }}
          placeholder="Search"
        />
        <div className="slider_second">
          {isLaptopCeil && (
            <Slider {...settings} ref={slides2}>
              {slider2.map((item, key) => (
                <SliderItem
                  key={key}
                  itemType={item.itemType}
                  bannerImage={item.bannerImage}
                />
              ))}
            </Slider>
          )}

          <div className="custom_arrow">
            <button type="button" onClick={prevArrow}>
              <Icon icon="icon_left" />
            </button>
            {isLaptopCeil && <span>vitarum nobis</span>}
            <button type="button" onClick={nextArrow}>
              <Icon icon="icon_right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
