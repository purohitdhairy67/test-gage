import React, { useCallback, useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import cx from "classname";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./appSkeleton.module.scss";
import { ROUTES } from "../../constants/routes.constants";
import { isEmpty, result } from "lodash";
import Cancle from "../Icons/Cancle";
// import { checkMobile } from "../../helpers/helper";

const AppSkeleton = ({ children, tasteData, odderData, feelData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search } = location;
  const [image, setImage] = React.useState(null);

  const [startscan, setStartScan] = useState(false);

  const handleBtnClick = (routeName) => () => {
    navigate({ pathname: routeName, search });
  };

  const ref = useRef(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    scannerRef.current = new QrScanner(
      ref.current,
      (result) => console.log("decoded qr code:", result),
      {
        /* your options or returnDetailedScanResult: true if you're not specifying any other options */
      }
    );
  }, []);

  //
  // QRCODE
  const handleCameraClick = () => {
    // camarRef.current.click();
    setStartScan(!startscan);
    scannerRef.current.start();
  };

  return (
    <div className={styles.container} key={startscan}>
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
            className={cx(styles.btn, styles.displayNone)}
            isActive={pathname === ROUTES.HOME}
            onClick={handleBtnClick(ROUTES.HOME)}
          >
            Home
          </Button>
          <Button
            className={cx(styles.btn)}
            isActive={pathname === ROUTES.PRODUCT}
            onClick={handleBtnClick(ROUTES.PRODUCT)}
          >
            Product
          </Button>
          <Button
            className={cx(styles.btn)}
            isActive={pathname === ROUTES.TESTE}
            onClick={handleBtnClick(ROUTES.TESTE)}
            isDisabled={isEmpty(tasteData)}
          >
            Taste
          </Button>
          <Button
            className={cx(styles.btn)}
            isActive={pathname === ROUTES.ODOR}
            onClick={handleBtnClick(ROUTES.ODOR)}
            isDisabled={isEmpty(odderData)}
          >
            Odor
          </Button>
          <Button
            className={cx(styles.btn)}
            isActive={pathname === ROUTES.FEEL}
            onClick={handleBtnClick(ROUTES.FEEL)}
            isDisabled={isEmpty(feelData)}
          >
            Feel
          </Button>

          {window.innerWidth <= 550 && (
            <Button className={styles.btn} onClick={handleCameraClick}>
              {startscan ? "Stop Scan" : "Start Scan"}
            </Button>
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

        <div className={cx(styles.content)}>{children}</div>
        <div className={cx(styles.footer)}>
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
          <div
            className={styles.thirdContainer}
            onClick={handleBtnClick(ROUTES.HOME)}
          >
            <p>More...</p>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          position: "fixed",
          width: "max(100vw, 100vh)",
          height: "max(100vw, 100vh)",
          zIndex: 25,
          display: startscan ? "block" : "none",
          backgroundColor: "black",
        }}
      > */}
      {/* <QrReader
          facingMode={"environment"}
          delay={1000}
          onError={handleError}
          onScan={handleScan}
          videoId="idone"
          ref={qrRef}
          onResult={handleScan}
          // chooseDeviceId={()=>selected}
          // style={{ width: "100%" }}

          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "blue",
          }}
          containerStyle={{
            width: "max(100vw, 100vh)",
            height: "max(100vw, 100vh)",
          }}
        /> */}
      <video
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 25,
          display: startscan ? "block" : "none",
        }}
      ></video>
      {/* </div> */}

      {startscan ? (
        <div
          onClick={() => {
            setStartScan(false);
            scannerRef.current.stop();
          }}
          style={{ position: "fixed", top: "5%", right: "10%", zIndex: 27 }}
        >
          <Cancle />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AppSkeleton;
