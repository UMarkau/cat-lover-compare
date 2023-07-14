import { Route, Routes, BrowserRouter } from "react-router-dom";

import { NavMenu } from "../components/NavMenu";
import { MainPage } from "../components/MainPage";
import { BreedsPage } from "../components/BreedsPage";
import { FavouritesPage } from "../components/FavouritesPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        {["/", "/:catId"].map((path) => (
          <Route key={path} path={path} element={<MainPage />} />
        ))}
        {["/breeds", "/breeds/:breedId", "/breeds/:breedId/:catId"].map(
          (path) => (
            <Route key={path} path={path} element={<BreedsPage />} />
          )
        )}
        {["/favourites", "/favourites/:catId"].map((path) => (
          <Route key={path} path={path} element={<FavouritesPage />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
