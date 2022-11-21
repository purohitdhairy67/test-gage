import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import PopUp from "../../components/popUp/PopUp";

import TreeMapChart from "../../components/TreeMapChart/TreeMapChar";

const TastePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSelected, setCurrentSelected] = useState(null);

  const colors = [
    "#3B93A5",
    "#F7B844",
    "#ADD8C7",
    "#EC3C65",
    "#CDD7B6",
    "#C1F666",
    "#D43F97",
    "#1E5D8C",
    "#421243",
    "#7F94B0",
  ];

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await axios.get(
        "https://run.mocky.io/v3/fe1bbc8e-3179-44f9-8fc3-7485482aa49f"
      );
      setIsLoading(false);
      setData(res.data.data);
    })();
  }, []);

  return !isLoading ? (
    currentSelected === null ? (
      <div style={{ height: "100%" }}>
        <TreeMapChart
          data={data}
          colors={colors}
          title="Tree Map chart for Tastes"
          isToolBarVisible
          setCurrentSelected={(v) => setCurrentSelected(v)}
        />
        :
      </div>
    ) : (
      <PopUp
        bgcol={currentSelected !== null ? colors[currentSelected] : "#000000"}
        setShow={() => setCurrentSelected(null)}
      />
    )
  ) : (
    <Loader />
  );
};

export default TastePage;
