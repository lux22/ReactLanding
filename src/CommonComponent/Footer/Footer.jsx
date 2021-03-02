import React from "react";
import styles from "./footer.module.scss";
import Icon from "../../utils/icon";
const Footer = () => {
  return (
    <div className={"container-fluid " + styles.main_wrapper}>
      <div className="row">
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_left}>
            <div className={styles.links}>
              <h2 className={styles.f_head}>Company</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Packages</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className={styles.links}>
              <h2 className={styles.f_head}>Informations</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Packages</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className={styles.links}>
              <h2 className={styles.f_head}>Informations</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Packages</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_right}>
            <h2 className={styles.f_head}>Contact Us</h2>
            <span>info@companyname.com</span>
            <span>+9884648340</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={styles.terms_wrapper}>
          <div className={styles.terms_text}>
            <span>Terms & conditions | Privacy Policy</span>
          </div>
          <div className={styles.terms_icons_wrap}>
            <div className={styles.icons}>
              <Icon icon="faceb" size={20} />
              <Icon icon="twit" size={20} />
              <Icon icon="link" size={20} />
              <Icon icon="tube" size={20} />
            </div>
            <div className={styles.rights_res}>2020. All right reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
