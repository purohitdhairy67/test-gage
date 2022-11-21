import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";

import TreeMapChart from "../../components/TreeMapChart/TreeMapChar";

const AllPage = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
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
      const res1 = await axios.get(
        "https://run.mocky.io/v3/fe1bbc8e-3179-44f9-8fc3-7485482aa49f"
      );
      const res2 = await axios.get(
        "https://run.mocky.io/v3/5f9aa1a3-17e4-404f-a3b0-8bda72ca1140"
      );
      const res3 = await axios.get(
        "https://run.mocky.io/v3/1d003401-850a-4ee8-99b0-a3aa23295f18"
      );
      setData1(res1.data.data);
      setData2(res2.data.data);
      setData3(res3.data.data);
      setIsLoading(false);
    })();
  }, []);

  return !isLoading ? (
    <div style={{ height: "100%" }}>
      <div>
        <TreeMapChart data={data1} colors={colors} />
      </div>
      <div>
        <TreeMapChart data={data2} colors={colors} />
      </div>
      <div>
        <TreeMapChart data={data3} colors={colors} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default AllPage;
