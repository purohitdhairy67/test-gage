import { map, size } from "lodash";
import React, { useState } from "react";
import Loader from "../../components/Loader";

import PopUp from "../../components/popUp/PopUp";
import TreeMapChart from "../../components/TreeMapChart/TreeMapChar";

import styles from "../TastePage/tastePage.module.scss";

const FeelPage = ({ data, isLoading }) => {
  const [currentSelected, setCurrentSelected] = useState(null);

  const textColors = map(data, (item) => item?.colorText || "#ffffff");

  // const [gap, setGap] = useState(false);

  // if (size(data) <= 4) {
  //   setGap(true);
  // }

  return isLoading ? (
    <Loader />
  ) : currentSelected === null ? (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      {size(data) <= 4 && <div className={styles.gap} />}{" "}
      <div style={{ height: "100%", flex: 1 }}>
        <TreeMapChart
          data={data}
          title="Tree Map chart for Feels"
          isToolBarVisible
          setCurrentSelected={(v) => setCurrentSelected(v)}
          textColors={textColors}
        />
      </div>
    </div>
  ) : data?.[currentSelected]?.sensationDescription ? (
    <PopUp
      bgcol={
        currentSelected !== null
          ? data?.[currentSelected]?.fillColor
          : "#000000"
      }
      setShow={() => setCurrentSelected(null)}
      description={data?.[currentSelected]?.sensationDescription}
    />
  ) : (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      {size(data) <= "4" && <div className={styles.gap} />}
      <div style={{ height: "100%", flex: 1 }}>
        <TreeMapChart
          data={data}
          title="Tree Map chart for Tastes"
          isToolBarVisible
          setCurrentSelected={(v) => setCurrentSelected(v)}
          textColors={textColors}
        />
      </div>
      :
    </div>
  );
};

export default FeelPage;
