import styled from "styled-components";
import { Outlet } from "react-router-dom";
import ButtonScrollTop from "components/buttonTest/ButtonScrollTop";
import Header from "./module/Header/Header";
import Footer from "./module/Footer/Footer";

const StyledMainLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  main {
    flex: 1;
  }
`;

const MainLayout = () => {
  return (
    <StyledMainLayout>
      <Header />
      <main>
        <Outlet />
        <ButtonScrollTop />
      </main>
      <Footer />
    </StyledMainLayout>
  );
};

export default MainLayout;
