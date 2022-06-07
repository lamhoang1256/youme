import styled from "styled-components";

interface TwoColumnLayoutProps {
  children: React.ReactNode;
}

const StyledTwoColumnLayout = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px !important;
  .main-column {
    flex: 1;
  }
  .second-column {
    width: 310px;
  }
  @media screen and (max-width: 1023.98px) {
    flex-direction: column;
    &:nth-child(1) {
      width: 100%;
    }
  }
`;

const TwoColumnLayout = ({ children }: TwoColumnLayoutProps) => {
  return <StyledTwoColumnLayout>{children}</StyledTwoColumnLayout>;
};

export default TwoColumnLayout;
