import React from "react";
import Image from "../../Image/Image";
import styles from "./download.module.scss";
import { Link } from "react-router-dom";
const DownloadApp = ({ contentLeft, contentRight }) => {
  return (
    <div className={"container-fluid"}>
      <div className={styles.dwn_bg}>
        <div className={styles.download_app_container}>
          <div className={styles.mob_image}>
            <Image url={contentLeft.image} />
          </div>
          <div className={styles.download_app}>
            <div className="text_content">
              <h2 className={styles.title}>{contentRight.title}</h2>
              <p className={styles.para}>{contentRight.para}</p>
              <div className={styles.app_btn}>
                <Link
                  to={{
                    pathname: "https://www.apple.com/in/shop",
                  }}
                  target="_blank"
                >
                  <Image url={contentRight.image1} />
                </Link>
                <Link
                  to={{
                    pathname:
                      "https://play.google.com/store/apps?hl=en_IN&gl=US",
                  }}
                  target="_blank"
                >
                  <Image url={contentRight.image2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
