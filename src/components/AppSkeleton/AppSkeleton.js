import React, { useCallback } from "react";
import cx from "classname";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./appSkeleton.module.scss";
import { ROUTES } from "../../constants/routes.constants";

const AppSkeleton = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search } = location;

  const handleBtnClick = (routeName) => () => {
    navigate({ pathname: routeName, search });
  };

  return (
    <div className={styles.container}>
      <div className={styles.homeBtn}>
        <Button
          isActive={pathname === ROUTES.HOME}
          onClick={handleBtnClick(ROUTES.HOME)}
        >
          Home
        </Button>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.header}>
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
          >
            Taste
          </Button>
          <Button
            className={styles.btn}
            isActive={pathname === ROUTES.ODOR}
            onClick={handleBtnClick(ROUTES.ODOR)}
          >
            Odor
          </Button>
          <Button
            className={styles.btn}
            isActive={pathname === ROUTES.FEEL}
            onClick={handleBtnClick(ROUTES.FEEL)}
          >
            Feel
          </Button>
          <Button
            className={styles.btn}
            isActive={pathname === ROUTES.ALL}
            onClick={handleBtnClick(ROUTES.ALL)}
          >
            All
          </Button>
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <p>
            MAMAY Technologies Ltd. | All right reserved © 2022 | val® is
            register trademark of Valiber Ltd. |{" "}
            <a href="https://www.tastegage.com/" target="_blank">
              www.TasteGAGE.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppSkeleton;
