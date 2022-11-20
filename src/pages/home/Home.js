import React from "react";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.firstContainer}>
          <div className={styles.imageContinaer}></div>
          <div className={styles.content}>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
