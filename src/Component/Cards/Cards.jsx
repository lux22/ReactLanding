import React from "react";
import Image from "../Image/Image";
import styles from "./card.module.scss";
const Cards = ({ image, title, text, imageType, items }) => {
  const rootClass =
    imageType === "wide" ? "col-12 col-md-8" : "col-12 col-md-4";

  return (
    <div className={rootClass + " mb-2 position"}>
      <div className={styles.card_container}>
        <Image url={image} />
        <div className={styles.text_overlay}>
          <span>{text}</span>
          <h2 className={styles.title}>{title}</h2>
          <div className="d-inline-flex mt-3">
            {items.map((item, key) => (
              <div>
                <img src={item.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
