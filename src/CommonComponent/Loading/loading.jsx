import React from "react";
import styles from "./loading.module.scss";
const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_text}>loading</div>
    </div>
  );
};

export default Loading;
