import { map } from "lodash";
import React, { useState } from "react";
import Loader from "../../components/Loader";

import PopUp from "../../components/popUp/PopUp";
import TreeMapChart from "../../components/TreeMapChart/TreeMapChar";

const TastePage = ({ data, isLoading }) => {
  const [currentSelected, setCurrentSelected] = useState(null);

  const textColors = map(data, (item) => item?.colorText || "#ffffff");

  return isLoading ? (
    <Loader />
  ) : currentSelected === null ? (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TreeMapChart
        data={data}
        title="Tree Map chart for Tastes"
        isToolBarVisible
        setCurrentSelected={(v) => setCurrentSelected(v)}
        textColors={textColors}
      />
      :
    </div>
  ) : (
    <PopUp
      bgcol={
        currentSelected !== null
          ? data?.[currentSelected]?.fillColor
          : "#000000"
      }
      setShow={() => setCurrentSelected(null)}
    />
  );
};

export default TastePage;
