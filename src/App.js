import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import AppSkeleton from "./components/AppSkeleton/AppSkeleton";
import { ROUTES } from "./constants/routes.constants";
import AllPage from "./pages/AllPage";
import FeelPage from "./pages/FeelPage";
import Homepage from "./pages/homepage/Homepage";
import OdorPage from "./pages/OdorPage";
import ProductPage from "./pages/productPage";
import TastePage from "./pages/TastePage/TastePage";

import { filter, map, orderBy, round, sortBy } from "lodash";

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
      x: `${item?.sensation}, ${
        item?.totalVal > 1
          ? Math.round(item?.totalVal)
          : (item?.totalVal).toFixed(2)
      } val®`,
      y: Math.max(item?.totalVal, 0.1),
      fillColor: item?.color || "#3396F7",
      textFillColor: item?.colorText || "#000000",
      sensationDescription: item?.sensationDescription || "",
    })
  );
};

export const getQueryParams = (query) => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split("&")
        .reduce((params, param) => {
          let [key, value] = param.split("=");
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, " "))
            : "";
          return params;
        }, {})
    : {};
};

const sortData = (data) => {
  const sensations = orderBy(data.sensations, ["totalVal"], "desc");
  return { ...data, sensations };
};

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlreadyFetched, setIsAlreadyFetched] = useState(false);
  const [data, setData] = useState({});

  const query = useLocation();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const queryParams = getQueryParams(query.search);
      const gageId =
        queryParams.gageId || "6513003b-ccd4-4db1-b578-65a4f258ac30";
      const res = await axios.get(
        `https://mamaygage.blob.core.windows.net/gages/${gageId}.json`
      );
      const { data } = res || {};
      setIsLoading(false);
      setData(sortData(data?.gageInfo));
      setIsAlreadyFetched(true);
    } catch (error) {
      setIsAlreadyFetched(true);
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (isAlreadyFetched) return;
    fetchData();
  }, []);

  const tasteData = getFormattedData(data, ITEM_TYPES.TASTE);
  const odderData = getFormattedData(data, ITEM_TYPES.ODDOR);
  const feelData = getFormattedData(data, ITEM_TYPES.FEEL);

  return (
    <AppSkeleton
      tasteData={tasteData}
      odderData={odderData}
      feelData={feelData}
    >
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage data={data} />} />
        <Route
          path={ROUTES.PRODUCT}
          element={<ProductPage isLoading={isLoading} data={data} />}
        />
        <Route
          path={ROUTES.TESTE}
          element={<TastePage isLoading={isLoading} data={tasteData} />}
        />
        <Route
          path={ROUTES.ODOR}
          element={<OdorPage isLoading={isLoading} data={odderData} />}
        />
        <Route
          path={ROUTES.FEEL}
          element={<FeelPage isLoading={isLoading} data={feelData} />}
        />

        <Route
          path={ROUTES.ALL}
          element={
            <AllPage
              isLoading={isLoading}
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
