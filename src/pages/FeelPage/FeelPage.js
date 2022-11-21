import axios from "axios";
import React, { useEffect, useState } from "react";

import TreeMapChart from "../../components/TreeMapChart/TreeMapChar";

const FeelPage = () => {
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
        "https://run.mocky.io/v3/1cacd4d5-6703-49c3-adc0-f52d4cb9dd55"
      );
      setIsLoading(false);
      setData(res.data.data);
    })();
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <TreeMapChart
        data={data}
        colors={colors}
        title="Tree Map chart for Feels"
        isToolBarVisible
      />
    </div>
  );
};

export default FeelPage;
