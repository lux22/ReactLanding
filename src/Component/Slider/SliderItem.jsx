import styles from "./slider.module.scss";
import Image from "../Image/Image";
import { mergeClasses } from "../../classify";
export const SliderItem = ({
  bannerImage,
  itemType,
  children,
  className,
} = {}) => {
  // const checkChildren = itemType !== "video" && children;
  const classes = mergeClasses(className, styles);
  return (
    <div className={classes.slider_wrapper}>
      <Image url={bannerImage} itemType={itemType} />
      {children}
    </div>
  );
};

export default SliderItem;
