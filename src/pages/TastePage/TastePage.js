import React, { useState } from "react";
import { map, size } from "lodash";

import Loader from "../../components/Loader";
import PopUp from "../../components/popUp/PopUp";
import TreeMapChart from "../../components/TreeMapChart/TreeMapChar";

import styles from "./tastePage.module.scss";

const TastePage = ({ data, isLoading }) => {
  const [currentSelected, setCurrentSelected] = useState(null);

  const textColors = map(data, (item) => item?.colorText || "#ffffff");

  const addMargin = size(data) <= 4;

  return isLoading ? (
    <Loader />
  ) : currentSelected === null ? (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          flex: 1,
          // marginRight: size(data) <= 4 ? "-37px" : 0,
        }}
      >
        <TreeMapChart
          data={data}
          title="Tree Map chart for Tastes"
          isToolBarVisible
          setCurrentSelected={(v) => setCurrentSelected(v)}
          textColors={textColors}
        />
      </div>
    </div>
  ) : data?.[currentSelected]?.sensationDescription ? (
    <PopUp
      title={data?.[currentSelected]?.sensation}
      description={data?.[currentSelected]?.sensationDescription}
      bgcol={
        currentSelected !== null
          ? data?.[currentSelected]?.fillColor
          : "#000000"
      }
      setShow={() => setCurrentSelected(null)}
    />
  ) : (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          flex: 1,
          // marginRight: size(data) <= 4 ? "-37px" : 0,
        }}
      >
        <TreeMapChart
          data={data}
          title="Tree Map chart for Tastes"
          isToolBarVisible
          setCurrentSelected={(v) => setCurrentSelected(v)}
          textColors={textColors}
        />
      </div>
    </div>
  );
};

export default TastePage;
