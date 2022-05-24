import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import ButtonScrollTop from "components/Button/ButtonScrollTop";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ButtonScrollTop />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
