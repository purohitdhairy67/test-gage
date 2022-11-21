import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";

import TreeMapChart from "../../components/TreeMapChart/TreeMapChar";

const OdorPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        "https://run.mocky.io/v3/5f9aa1a3-17e4-404f-a3b0-8bda72ca1140"
      );
      setIsLoading(false);
      setData(res.data.data);
    })();
  }, []);

  return !isLoading ? (
    <div style={{ height: "100%" }}>
      <TreeMapChart
        data={data}
        colors={colors}
        title="Tree Map chart for Odors"
        isToolBarVisible
      />
    </div>
  ) : (
    <Loader />
  );
};

export default OdorPage;
