import Image from "../../Image/Image";
import styles from "./featuredStories.module.scss";
import Button from "../../Button/Button";
import { useBreakpoints } from "../../../utils/breakpoints";
const FeaturedStories = ({ contentLeft, contentRight }) => {
  const { isTabletCeil } = useBreakpoints();
  const mediaView = isTabletCeil ? (
    <div className={"container-fluid " + styles.featured_container}>
      <div className={styles.overlay_wrapper}>
        <Image url={contentLeft.image} />
        <div className={styles.overlay}></div>
        <div className={"row " + styles.wrapper}>
          <div>
            <div className={styles.overlay_text}>
              <h2 className={styles.title}>Lorem Ipsum Dolor Sit Amet</h2>
              <p>
                At iam decimum annum in spelunca iacet. Cur tantas regiones
                barbarorum pedibus obiit, tot maria transmisit.
              </p>
              <Button type="button" priority="high">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.right_stories_list + " " + styles.right_stories_media}
      >
        <div className={styles.stories_right}>
          <h2 className={styles.title}>{contentRight.title}</h2>
          <ul className={styles.list_item}>
            {contentRight.items.map((item, key) => (
              <li key={key}>
                <div className={styles.list_image}>
                  <img src={item.image} alt={item.image} />
                </div>
                <div>
                  <h3 className={styles.list_title}>{item.title}</h3>
                  <span className={styles.date}>{item.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className={"container-fluid " + styles.featured_container}>
      <div className={styles.overlay_wrapper}>
        <Image url={contentLeft.image} />
        <div className={styles.overlay}></div>
        <div className={"row " + styles.wrapper}>
          <div>
            <div className={styles.overlay_text}>
              <h2 className={styles.title}>Lorem Ipsum Dolor Sit Amet</h2>
              <p>
                At iam decimum annum in spelunca iacet. Cur tantas regiones
                barbarorum pedibus obiit, tot maria transmisit.
              </p>
              <Button type="button" priority="high">
                Contact
              </Button>
            </div>
          </div>
          <div className={styles.right_stories_list}>
            <div className={styles.stories_right}>
              <h2 className={styles.title}>{contentRight.title}</h2>
              <ul className={styles.list_item}>
                {contentRight.items.map((item, key) => (
                  <li key={key}>
                    <div className={styles.list_image}>
                      <img src={item.image} alt={item.image} />
                    </div>
                    <div>
                      <h3 className={styles.list_title}>{item.title}</h3>
                      <span className={styles.date}>{item.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return mediaView;
};

export default FeaturedStories;
