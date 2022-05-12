import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Detail from "pages/Detail/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
