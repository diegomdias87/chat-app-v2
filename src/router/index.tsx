import { lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";

const HomePage = lazy(() => import("~/pages/HomePage"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
