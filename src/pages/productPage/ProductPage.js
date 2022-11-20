import React, { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchProductTypes } from "../../actions/productType.actions";
import AppSkeleton from "../../components/AppSkeleton/AppSkeleton";
import Button from "../../components/Button/Button";
import cx from "classname";
import styles from "./productPage.module.scss";

const Homepage = () => {
  const [data, setData] = useState({});
  const [showDescription, setShowDescription] = useState(false);

  const handleOnClick = useCallback(() => {
    setShowDescription((prevState) => !prevState);
  }, [setShowDescription]);

  useEffect(() => {
    (async () => {
      const rawData = await fetchProductTypes();

      setData(rawData);
    })();
  }, [setData]);

  return (
    <AppSkeleton>
      <div className={styles.page}>
        <div className={styles.box1}>
          <div className={styles.imgBox}>
            <img src={data[0]?.img_url} alt="logo is loading" />
          </div>
          <div className={styles.box2}>
            <div>
              <p className={styles.text1}>{data[0]?.name}</p>
              <p className={styles.text2}>BY: {data[0]?.by}</p>
              {showDescription && (
                <div className={cx(styles.text2, styles.descriptionDesktop)}>
                  {data[0].description}
                </div>
              )}
            </div>

            <div onClick={handleOnClick} className={styles.btn}>
              <Button>More</Button>
            </div>
          </div>
        </div>

        {showDescription && (
          <div className={styles.descriptionMobile}>{data[0]?.description}</div>
        )}

        {!showDescription && (
          <div className={styles.box3}>
            <ReactPlayer url={data[0]?.video_url} height="270px" width="100%" />
          </div>
        )}
      </div>
    </AppSkeleton>
  );
};

export default Homepage;
