import React from "react";

import image from "./image.png";

import styles from "./homepage.module.scss";

const Homepage = ({ data }) => {
  const { about } = data;

  return (
    <div className={styles.page}>
      <div className={styles.containerWithImage}>
        <img src={image} alt="" className={styles.image} />
        <p className={styles.content}>
          A social venture for people to better communicate taste.
        </p>
      </div>
      <p className={styles.secondpara} style={{ marginTop: "20px" }}>
        For any support, in vision and with know how please contact us
        mamay@mamay.me
      </p>
      <p className={styles.box3} style={{ marginTop: "20px" }}>
        * All the data that is presented in this app is experimental.
      </p>
      <p className={styles.box3} style={{ paddingLeft: "4rem" }}>
        MAMAY Technologies Ltd have no responsibility for any use of this data.
      </p>
      {/* <div className={styles.header}>
        <p>MAMAY Technologies Ltd</p>
      </div>
      <div className={styles.contentContainer}>
        <div
          dangerouslySetInnerHTML={{
            __html: about,
          }}
        />
      </div>
      <div className={styles.footerContainer}>
        <p className={styles.box3}>
          * All the data that is presented in this app is experimental. MAMAY
          Technologies Ltd have no responsibility for any use of this data.
        </p>
        <div className={styles.box4}>
          <p>Taste</p>
          <p>We know what we like, yet we can never fully explain it...</p>
        </div>
      </div> */}
    </div>
  );
};

export default Homepage;
