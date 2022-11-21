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

const App = () => {
  return (
    <AppSkeleton>
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
        <Route path={ROUTES.TESTE} element={<TastePage />} />
        <Route path={ROUTES.ODOR} element={<OdorPage />} />
        <Route path={ROUTES.FEEL} element={<FeelPage />} />
        <Route path={ROUTES.ALL} element={<AllPage />} />
      </Routes>
    </AppSkeleton>
  );
};

export default App;
