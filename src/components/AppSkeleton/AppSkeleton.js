import React, { useRef, useState } from "react";
import QrReader from "react-qr-reader";
import cx from "classname";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./appSkeleton.module.scss";
import { ROUTES } from "../../constants/routes.constants";
import { isEmpty, result } from "lodash";
// import { checkMobile } from "../../helpers/helper";

const AppSkeleton = ({ children, tasteData, odderData, feelData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search } = location;
  const [image, setImage] = React.useState(null);

  const camarRef = useRef(null);
  const qrRef = useRef(null);

  const [startscan, setStartScan] = useState(false);
  const [data, setData] = useState("");
  const [selected, setSelected] = useState("environment");
  const [loadingScan, setLoadingScan] = useState(false);

  // QRCODE
  const handleScan = async (result) => {
    setLoadingScan(true);
    console.log(`loaded data data`, result);
    if (result && result !== "") {
      setData(result);
      console.log(`loaded >>>`, result);
      window.open(result);
      setStartScan(false);
      setLoadingScan(false);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleCameraClick = () => {
    // camarRef.current.click();
    setStartScan(!startscan);
  };

  const handleInputClick = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];

        const newUrl = URL.createObjectURL(file);
        setImage(newUrl);
      }
    }
  };

  const handleBtnClick = (routeName) => () => {
    navigate({ pathname: routeName, search });
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.homeBtn}>
        <Button
          isActive={pathname === ROUTES.HOME}
          onClick={handleBtnClick(ROUTES.HOME)}
        >
          Home
        </Button>
      </div> */}
      <div className={styles.contentBox}>
        <div className={styles.header}>
          {/* <Button
            isActive={pathname === ROUTES.HOME}
            onClick={handleBtnClick(ROUTES.HOME)}
          >
            Home
          </Button> */}
          <Button
            className={cx(styles.btn, styles.displayNone, {
              [styles.scan]: startscan,
            })}
            isActive={pathname === ROUTES.HOME}
            onClick={handleBtnClick(ROUTES.HOME)}
          >
            Home
          </Button>
          <Button
            className={cx(styles.btn, { [styles.scan]: startscan })}
            isActive={pathname === ROUTES.PRODUCT}
            onClick={handleBtnClick(ROUTES.PRODUCT)}
          >
            Product
          </Button>
          <Button
            className={cx(styles.btn, { [styles.scan]: startscan })}
            isActive={pathname === ROUTES.TESTE}
            onClick={handleBtnClick(ROUTES.TESTE)}
            isDisabled={isEmpty(tasteData)}
          >
            Taste
          </Button>
          <Button
            className={cx(styles.btn, { [styles.scan]: startscan })}
            isActive={pathname === ROUTES.ODOR}
            onClick={handleBtnClick(ROUTES.ODOR)}
            isDisabled={isEmpty(odderData)}
          >
            Odor
          </Button>
          <Button
            className={cx(styles.btn, { [styles.scan]: startscan })}
            isActive={pathname === ROUTES.FEEL}
            onClick={handleBtnClick(ROUTES.FEEL)}
            isDisabled={isEmpty(feelData)}
          >
            Feel
          </Button>

          {window.innerWidth <= 450 && (
            <Button className={styles.btn} onClick={handleCameraClick}>
              {startscan ? "Stop Scan" : "Start Scan"}
            </Button>
          )}
          {startscan && (
            <div
              style={{
                position: "fixed",
                top: "24%",
                // left: "8%",
                zIndex: 15,
                width: "60%",
                height: "100vh",
                maxWidth: "500px",
              }}
            >
              <QrReader
                facingMode={"environment"}
                delay={1000}
                onError={handleError}
                onScan={handleScan}
                // chooseDeviceId={()=>selected}
                style={{ width: "100%" }}
              />
            </div>
          )}

          {/* <input
            className={styles.btn}
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            capture="environment"
            onClick={(e) => handleInputClick(e.target)}
            ref={camarRef}
          ></input> */}
        </div>

        <div className={cx(styles.content, { [styles.scan]: startscan })}>
          {children}
        </div>
        <div className={cx(styles.footer, { [styles.scan]: startscan })}>
          <div className={styles.firstContainer}>
            <p className={styles.title}> MAMAY </p>
            <p className={styles.content}>Technologies Ltd.</p>
          </div>
          <div className={styles.secondContainer}>
            <p>All right reserved © 2023</p>
            <p>val® is register trademark of Valiber Ltd.</p>
          </div>
          {/* <a
              href="https://www.tastegage.com/"
              target="_blank"
              rel="noreferrer"
            >
              www.TasteGAGE.com
            </a> */}
          <div className={styles.thirdContainer}>
            <p>More...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSkeleton;
