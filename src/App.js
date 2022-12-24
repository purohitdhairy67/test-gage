import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AppSkeleton from "./components/AppSkeleton/AppSkeleton";
import { ROUTES } from "./constants/routes.constants";
import AllPage from "./pages/AllPage";
import FeelPage from "./pages/FeelPage";
import Homepage from "./pages/homepage/Homepage";
import OdorPage from "./pages/OdorPage";
import ProductPage from "./pages/productPage";
import TastePage from "./pages/TastePage/TastePage";

import { data } from "./data";
import { filter, map } from "lodash";

const ITEM_TYPES = {
  TASTE: "Taste",
  ODDOR: "Odor",
  FEEL: "Feel",
};

const getFormattedData = (data, type) => {
  return map(
    filter(data.sensations, (item) => item?.sensationType === type),
    (item) => ({
      ...item,
      x: item?.sensation,
      y: Math.min(item?.totalVal, 3),
      fillColor: item?.color || "#3396F7",
      textFillColor: item?.colorText || "#000000",
    })
  );
};
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlreadyFetched, setIsAlreadyFetched] = useState(false);
  const [data1, setData] = useState({});

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://www.tastegage.com/_functions/getGage", {
        method: "POST",
        body: JSON.stringify({
          gageId: "32a1974d-21fb-4a63-b147-e9de21b0539b",
        }),
        headers: {
          authorization: "1Da2MVmFWU7QHRWcb5tVwzw4uvxfH1au",
        },
      });
      const data = await JSON.parse(res);
      setIsLoading(false);
      setData(data);
      setIsAlreadyFetched(true);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (isAlreadyFetched) return;
    fetchData();
  }, []);

  return (
    <AppSkeleton>
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage data={data} />} />
        <Route path={ROUTES.PRODUCT} element={<ProductPage data={data} />} />
        <Route
          path={ROUTES.TESTE}
          element={
            <TastePage data={getFormattedData(data, ITEM_TYPES.TASTE)} />
          }
        />
        <Route
          path={ROUTES.ODOR}
          element={<OdorPage data={getFormattedData(data, ITEM_TYPES.ODDOR)} />}
        />
        <Route
          path={ROUTES.FEEL}
          element={<FeelPage data={getFormattedData(data, ITEM_TYPES.FEEL)} />}
        />
        <Route
          path={ROUTES.ALL}
          element={
            <AllPage
              data1={getFormattedData(data, ITEM_TYPES.TASTE)}
              data2={getFormattedData(data, ITEM_TYPES.ODDOR)}
              data3={getFormattedData(data, ITEM_TYPES.FEEL)}
            />
          }
        />
      </Routes>
    </AppSkeleton>
  );
};

export default App;
