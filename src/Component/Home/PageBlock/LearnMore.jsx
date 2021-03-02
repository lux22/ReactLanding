import React from "react";
import Image from "../../Image/Image";
import styles from "./learn.module.scss";
import Button from "../../Button/Button";
const LearnMore = ({ title, para, buttonText, image }) => {
  return (
    <div className={"container-fluid " + styles.wrapper}>
      <div className="row">
        <div className={"col-12 col-md-6 d-flex align-items-center"}>
          <div className={styles.learn_left_container}>
            <h2 className={styles.learn_tilte}>{title}</h2>
            <p className={styles.learn_para}>{para}</p>
            <Button>{buttonText}</Button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            {image.map((item, key) => (
              <div className={"col-6 " + styles.learn_imgwrap} key={key}>
                <div className={styles.learn_img}>
                  <Image url={item.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LearnMore;
