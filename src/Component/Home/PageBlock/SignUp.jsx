import React from "react";
import TextInput from "../../Input/TextInput";
import styles from "./signup.module.scss";
import Image from "../../Image/Image";
import Button from "../../Button/Button";
const SignUp = ({ title, para, buttonText, image }) => {
  return (
    <div className={styles.signup_wrapper}>
      <div className={styles.signupImage}>
        <Image url={image} />
        <div className={styles.overlay_text}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.para}>{para}</p>
        </div>
      </div>
      <div className={styles.signup_form}>
        <form>
          <div className={styles.forms}>
            <TextInput type="text" placeholder="Name" />
            <TextInput type="text" placeholder="Email" />
            <TextInput type="text" placeholder="Phone Number" />
          </div>
          <div className={styles.btn}>
            <Button>SIGNUP NOW</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
