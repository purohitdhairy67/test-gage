import React, { useCallback, useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import cx from "classname";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./appSkeleton.module.scss";
import { ROUTES } from "../../constants/routes.constants";
import { isEmpty } from "lodash";
import Cancle from "../Icons/Cancle";
// import { checkMobile } from "../../helpers/helper";

const AppSkeleton = ({ children, tasteData, odderData, feelData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search } = location;

  const handleBtnClick = (routeName) => () => {
    if (pathname === routeName) return;
    navigate({ pathname: routeName, search });
  };

  const ref = useRef(null);
  const scannerRef = useRef(null);
  const closeIconref = useRef(null);

  useEffect(() => {
    scannerRef.current = new QrScanner(
      ref.current,
      (result) => {
        if (scannerRef.current) scannerRef.current.stop();
        ref.current.style.pointerEvents = "none";
        if (result.includes("http")) {
          window.location.href = result;
        }
      }

      // {
      //   /* your options or returnDetailedScanResult: true if you're not specifying any other options */
      // }
    );
  }, []);

  //
  // QRCODE
  const handleCameraClick = () => {
    closeIconref.current.style.display = "block";
    ref.current.style.pointerEvents = "auto";
    scannerRef.current.start();
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
            <Button
              className={styles.btn}
              onClick={handleCameraClick}
              style={{
                backgroundColor: "#0000fe",
              }}
            >
              Scan
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
          <div
            className={styles.firstContainer}
            onClick={handleBtnClick(ROUTES.HOME)}
          >
            <p className={styles.title}> MAMAY </p>
            <p className={styles.content}>Technologies Ltd.</p>
          </div>
          <div
            className={styles.secondContainer}
            onClick={handleBtnClick(ROUTES.HOME)}
          >
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
          width: "100vw",
          height: "100vh",
          zIndex: 26,
          display: startscan ? "block" : "none",
          backgroundColor: "black",
          top: 0,
          left: 0,
          pointerEvents: "none",
          background: "green",
          overflow: "hidden",
        }}
      > */}
      <video
        ref={ref}
        style={{
          position: "fixed",
          // width: "max(100vw, 100vh)",
          height: "max(100vw, 100vh)",
          top: "0",
          zIndex: 26,
          pointerEvents: "none",
        }}
      />
      {/* </div> */}

      <div
        ref={closeIconref}
        onClick={() => {
          ref.current.style.pointerEvents = "none";
          closeIconref.current.style.display = "none";
          scannerRef.current.stop();
        }}
        style={{
          position: "fixed",
          top: "5%",
          right: "10%",
          zIndex: 27,
          display: "none",
        }}
      >
        <Cancle />
      </div>
    </div>
  );
};

export default AppSkeleton;
