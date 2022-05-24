import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

const MainLayout = React.lazy(() => import("layouts/MainLayout"));
const Home = React.lazy(() => import("pages/Home/Home"));
const Login = React.lazy(() => import("pages/Login/Login"));
const Detail = React.lazy(() => import("pages/Detail/Detail"));
const Watch = React.lazy(() => import("pages/Watch/Watch"));
const Explore = React.lazy(() => import("pages/Explore/Explore"));
const Category = React.lazy(() => import("pages/Category/Category"));
const Community = React.lazy(() => import("pages/Community/Community"));

const App = () => {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/community" element={<Community />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
