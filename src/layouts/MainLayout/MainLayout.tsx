import styled from "styled-components";
import { Outlet } from "react-router-dom";
import ButtonScrollTop from "components/button/ButtonScrollTop";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const StyledMainLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  main {
    flex: 1;
    min-height: calc(100vh - var(--height-header));
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
