import styled from "styled-components";

const StyledEndOfPage = styled.div`
  padding: 30px 0 20px;
  text-align: center;
  font-size: 1.8rem;
  color: rgb(196, 193, 234);
  font-weight: 600;
`;

const EndOfPage = () => {
  return <StyledEndOfPage>Wow! You have seen it all</StyledEndOfPage>;
};

export default EndOfPage;
