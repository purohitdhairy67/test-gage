import React from "react";
import styles from "./loader.module.scss";

const Loader = () => (
  <div className={styles.loadingWrapper}>
    <div className={styles["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
