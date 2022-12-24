import React, { useCallback } from "react";
import Cancle from "../Icons/Cancle";
import styles from "./popUp.module.scss";

const PopUp = ({ title, description, bgcol, setShow }) => {
  const handleOnClick = useCallback(() => {
    setShow((prevState) => !prevState);
  }, [setShow]);

  const getCol = useCallback(() => {
    if (bgcol !== null) {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bgcol);
      result = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      };
      if (result.r * 0.299 + result.g * 0.587 + result.b * 0.114 > 186)
        return "#000000";
      else return "#ffffff";
    } else return "#000000";
  }, [bgcol]);

  return (
    <div className={styles.wrapper} style={{ color: getCol() }}>
      <div className={styles.content} style={{ backgroundColor: bgcol }}>
        <div onClick={handleOnClick} className={styles.icon}>
          <Cancle fill={getCol()} />
        </div>
        <div className={styles.title}>{title}Taste Sweetnessi</div>
        <div className={styles.description}>
          {description}Sweetness is a basic taste most perceived when eating
          foods rich in sugars. Sweet tastes are generally regarded as
          pleasurable. In addition to sugars like sucrose, many other chemical
          compounds are sweet, including aldehydes, ketones, and sugar alcohols.
          Some are sweet at very low concentrations, allowing their use as
          non-caloric sugar substitutes. Such non-sugar sweeteners include
          saccharin and aspartame. Other compounds, such as miraculin, may alter
          perception of sweetness itself.
        </div>
      </div>
    </div>
  );
};

export default PopUp;
