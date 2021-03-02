import { useState, useEffect } from "react";
import styles from "./image.module.scss";

const Image = ({ url, itemType }) => {
  const [aspectRatio, setAspectRatio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [itemContent, setItemContent] = useState(null);
  let imageWidth, imageHeight;

  let loadClass = isLoading ? styles.placeholder : "";

  const onImageLoaded = (event) => {
    imageWidth = event.target.clientWidth;
    imageHeight = event.target.clientHeight;
    setAspectRatio((imageHeight / imageWidth) * 100);
  };

  const imgContainer = {
    position: "relative",
    width: "100%",
    paddingTop: `${aspectRatio}%`,
  };

  useEffect(() => {
    if (itemType === "image") {
      setItemContent(<img src={url} alt="" onLoad={onImageLoaded} />);
    } else {
      setItemContent(<img src={url} alt="" onLoad={onImageLoaded} />);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`${styles.mar_image_container} ${loadClass}`}
      style={imgContainer}
    >
      {itemContent}
    </div>
  );
};

Image.defaultProps = {
  itemType: "image",
  url: "",
};

export default Image;
