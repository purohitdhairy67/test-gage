import React, { useCallback, useEffect, useState } from "react";
import cx from "classname";
import video from "../../assets/Video1.mp4";
import image from "../../assets/image1.png";

import { fetchProductTypes } from "../../actions/productType.actions";
import Button from "../../components/Button/Button";
import styles from "./productPage.module.scss";
import Loader from "../../components/Loader";

const ProductPage = ({ data }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log("iasdad", video);

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
            {showDescription && (
              <div
                className={cx(styles.text2, styles.descriptionDesktop)}
                dangerouslySetInnerHTML={{
                  __html: data?.about,
                }}
              ></div>
            )}
          </div>

          <div onClick={handleOnClick} className={styles.btn}>
            <Button onClick={() => {}}>More</Button>
          </div>
        </div>
      </div>

      {showDescription && (
        <div
          className={styles.descriptionMobile}
          dangerouslySetInnerHTML={{
            __html: data?.about,
          }}
        ></div>
      )}

      {!showDescription && (
        <div className={styles.box3}>
          <video height="270px" width="100%" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default ProductPage;
