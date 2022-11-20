import React from "react";
import cx from "classname";

import Button from "../Button/Button";

import styles from "./appSkeleton.module.scss";

const AppSkeleton = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.homeBtn}>
        <Button>Home</Button>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.header}>
          <Button className={cx(styles.btn, styles.displayNone)}>Home</Button>
          <Button className={styles.btn}>Product</Button>
          <Button className={styles.btn}>Taste</Button>
          <Button className={styles.btn}>Odor</Button>
          <Button className={styles.btn}>Feel</Button>
          <Button className={styles.btn}>All</Button>
        </div>
        {children}
        <div className={styles.footer}>
          <p>
            MAMAY Technologies Ltd. | All right reserved © 2022 | val® is
            register trademark of Valiber Ltd. | <span>www.TasteGAGE.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppSkeleton;
