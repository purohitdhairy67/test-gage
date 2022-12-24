import { map } from "lodash";
import React, { useState } from "react";
import PopUp from "../../components/popUp/PopUp";

import TreeMapChart from "../../components/TreeMapChart/TreeMapChar";

const AllPage = ({ data1, data2, data3 }) => {
  const [currentSelected, setCurrentSelected] = useState(null);
  const [currentColor, setCurrentColor] = useState("#ffffff");

  const textColors1 = map(data1, (item) => item?.colorText || "#ffffff");
  const textColors2 = map(data2, (item) => item?.colorText || "#ffffff");
  const textColors3 = map(data3, (item) => item?.colorText || "#ffffff");

  return currentSelected === null ? (
    <div style={{ height: "100%" }}>
      <div>
        <TreeMapChart
          data={data1}
          setCurrentSelected={(v) => {
            setCurrentSelected(v);
            setCurrentColor(data1?.[v]?.fillColor);
          }}
          textColors={textColors1}
        />
      </div>
      <div>
        <TreeMapChart
          data={data2}
          setCurrentSelected={(v) => {
            setCurrentSelected(v);
            setCurrentColor(data2?.[v]?.fillColor);
          }}
          textColors={textColors2}
        />
      </div>
      <div>
        <TreeMapChart
          data={data3}
          setCurrentSelected={(v) => {
            setCurrentSelected(v);
            setCurrentColor(data3?.[v]?.fillColor);
          }}
          textColors={textColors3}
        />
      </div>
    </div>
  ) : (
    <PopUp bgcol={currentColor} setShow={() => setCurrentSelected(null)} />
  );
};

export default AllPage;
