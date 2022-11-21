import React from "react";
import styles from "./homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.box1}>MAMAY Technologies Ltd</div>
      <div className={styles.box2}>
        MAMAY is a social venture for people to better communicate taste. For
        any support, in vision and with know how please contact us
        mamay@mamay.me
      </div>
      <div className={styles.box3}>
        * All the data that is presented in this app is experimental. MAMAY
        Technologies Ltd have no responsibility for any use of this data.
      </div>
      <div className={styles.box4}>
        <p>Taste</p>
        <p>We know what we like, yet we can never fully explain it...</p>
      </div>
    </div>
  );
};

export default Homepage;
