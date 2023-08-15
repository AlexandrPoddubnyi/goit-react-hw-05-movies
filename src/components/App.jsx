import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import SharedLayout from "./SharedLayouts/SharedLayout";
// import Home from "../pages/Home/Home";
// import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
const SharedLayout = lazy(() => import ('./SharedLayouts/SharedLayout'))
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => ('../pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => ('./Cast/Cast'));
// const Reviews = lazy(() => ('./Reviews/Reviews'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
