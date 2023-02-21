import React, { useCallback, useEffect, useState } from "react";
import cx from "classname";

import video from "../../assets/Video1.mp4";
import videoPoster from "../../assets/videoPoster.png";
import styles from "./productPage.module.scss";
import Loader from "../../components/Loader";
import ScanerIcon from "../../components/Icons/Scaner";

import { QrReader } from "react-qr-reader";

const ProductPage = ({ data, isLoading }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleOnClick = useCallback(() => {
    setShowDescription((prevState) => !prevState);
  }, [setShowDescription]);

  return !isLoading ? (
    <div className={styles.page}>
      <div className={styles.box1}>
        <div className={styles.imgBox}>
          <img src={data?.image} alt="" />
        </div>
        <div className={styles.box2}>
          <div>
            <p className={styles.text1}>{data?.set}</p>
            <p className={styles.text2}>BY: {data?.createdBy}</p>
            {!showDescription && (
              <p
                className={`${styles.text2} ${styles.hover}`}
                style={{ color: "#c72c40" }}
                onClick={handleOnClick}
              >
                More...
              </p>
            )}
            {showDescription && (
              <div className={styles.descriptionDesktop}>
                <div
                  style={{ marginTop: "20px" }}
                  className={cx(styles.text2)}
                  dangerouslySetInnerHTML={{
                    __html: data?.about,
                  }}
                ></div>
                <p
                  className={`${styles.text2} ${styles.hover}`}
                  style={{ color: "#c72c40" }}
                  onClick={handleOnClick}
                >
                  Back...
                </p>
              </div>
            )}
          </div>

          {!showDescription && (
            <div
              style={{
                height: "100px",
                width: "100px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: "-12px",
              }}
              onClick={handleOnClick}
              className={styles.hover}
            >
              <ScanerIcon />
            </div>
          )}
          {/* <Button onClick={() => {}}>More</Button> */}
        </div>
      </div>

      {showDescription && (
        <div className={styles.descriptionMobile}>
          <div
            className={styles.descriptionMobile}
            dangerouslySetInnerHTML={{
              __html: data?.about,
            }}
          ></div>
          <p
            className={`${styles.text2} ${styles.hover}`}
            style={{ color: "#c72c40" }}
            onClick={handleOnClick}
          >
            Back...
          </p>
        </div>
      )}

      {!showDescription && (
        // <div className={styles.box3}>
        //   <video height="270px" width="100%" controls poster={videoPoster}>
        //     <source src={video} type="video/mp4" />
        //   </video>
        // </div>
        <div
          style={{
            width: "100%",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              height: "270px",
              width: "480px",
              alignSelf: "center",
            }}
          >
            <iframe
              src="https://share.synthesia.io/embeds/videos/60a960d8-e7e2-4e0e-968e-aa52ac42833e"
              loading="lazy"
              title="Synthesia video player"
              allow="encrypted-media; fullscreen;"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default ProductPage;
