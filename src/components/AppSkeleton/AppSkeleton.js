import React from "react";
import cx from "classname";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./appSkeleton.module.scss";
import { ROUTES } from "../../constants/routes.constants";
import { isEmpty } from "lodash";

const AppSkeleton = ({ children, tasteData, odderData, feelData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search } = location;

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
            className={cx(styles.btn, styles.displayNone)}
            isActive={pathname === ROUTES.HOME}
            onClick={handleBtnClick(ROUTES.HOME)}
          >
            Home
          </Button>
          <Button
            className={styles.btn}
            isActive={pathname === ROUTES.PRODUCT}
            onClick={handleBtnClick(ROUTES.PRODUCT)}
          >
            Product
          </Button>
          <Button
            className={styles.btn}
            isActive={pathname === ROUTES.TESTE}
            onClick={handleBtnClick(ROUTES.TESTE)}
            isDisabled={isEmpty(tasteData)}
          >
            Taste
          </Button>
          <Button
            className={styles.btn}
            isActive={pathname === ROUTES.ODOR}
            onClick={handleBtnClick(ROUTES.ODOR)}
            isDisabled={isEmpty(odderData)}
          >
            Odor
          </Button>
          <Button
            className={styles.btn}
            isActive={pathname === ROUTES.FEEL}
            onClick={handleBtnClick(ROUTES.FEEL)}
            isDisabled={isEmpty(feelData)}
          >
            Feel
          </Button>
          {/* <Button
            className={styles.btn}
            isActive={pathname === ROUTES.ALL}
            onClick={handleBtnClick(ROUTES.ALL)}
            isDisabled={
              isEmpty(odderData) && isEmpty(tasteData) && isEmpty(feelData)
            }
          >
            All
          </Button> */}
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
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
