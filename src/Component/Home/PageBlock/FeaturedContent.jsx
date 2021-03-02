import Image from "../../Image/Image";
import styles from "./featured.module.scss";
const FeaturedContent = (props) => {
  const { title, images } = props;
  const slideImage = images.map((item) => (
    <div className="col-6 col-md-6 col-lg-3 mb-3">
      <div className={styles.image_mask}>
        <Image url={item.img} />
        <p className={styles.overlayPara}>Quae excelsiores Dant clariora </p>
      </div>
    </div>
  ));
  return (
    <div className={"container " + styles.featured_wrapper}>
      <div className="row">
        <div className="col-12">
          <h2 className={styles.featured_header}>{title}</h2>
        </div>
      </div>
      <div className="row">{slideImage}</div>
    </div>
  );
};

export default FeaturedContent;
