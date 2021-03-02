import React from "react";
import Card from "../../Cards/Cards";
import Image from "../../Image/Image";
import styles from "./inspiration.module.scss";
const Inspiration = ({ title, para, image }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <div className={styles.header_container}>
            <h2 className={styles.title}>{title}</h2>
            <span>{para}</span>
          </div>
        </div>
        {image.map((item, key) => (
          <Card {...item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
