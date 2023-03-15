import React, { useCallback, useEffect, useState } from "react";

import cx from "classname";
import { useNavigate } from "react-router-dom";
import QrReader from "react-qr-reader";

// import video from "../../assets/Video1.mp4";
// import videoPoster from "../../assets/videoPoster.png";
import Loader from "../../components/Loader";
import ScanerIcon from "../../components/Icons/Scaner";

import styles from "./productPage.module.scss";

const ProductPage = ({ data, isLoading }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);
  const [qrCode, setQrCode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (qrCode) {
      navigate(qrCode, { replace: true });
    }
  }, [qrCode]);

  const openQrScanner = () => {
    setShowQrCode(true);
  };

  const handleOnClick = useCallback(() => {
    setShowDescription((prevState) => !prevState);
  }, [setShowDescription]);

  // checkes if url is from youtube we convert it to youtube embed url ex: https://www.youtube.com/embed/tgbNymZ7vqY
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    const id =
      ampersandPosition !== -1
        ? videoId.substring(0, ampersandPosition)
        : videoId;
    return `https://www.youtube.com/embed/${id}`;
  };

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
                height: "80px",
                width: "8q0px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: "-12px",
              }}
              onClick={openQrScanner}
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
              src={
                data?.videoUrl
                  ? getYoutubeEmbedUrl(data?.videoUrl)
                  : "https://share.synthesia.io/embeds/videos/60a960d8-e7e2-4e0e-968e-aa52ac42833e"
              }
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
      {showQrCode && window.innerWidth < 900 && (
        <QrReader
          delay={300}
          onError={(error) => console.log(error)}
          onScan={(data) => {
            setQrCode(data);
            console.log(data, "this is data");
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 100,
            left: 0,
            margin: "auto auto",
          }}
          facingMode="environment"
        />
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default ProductPage;
