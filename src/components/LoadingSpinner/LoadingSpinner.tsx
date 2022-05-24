import styled from "styled-components";

const StyledLoadingSpinner = styled.div`
  margin: 40px auto;
  width: 40px;
  height: 40px;
`;

const LoadingSpinner = () => {
  return (
    <StyledLoadingSpinner>
      <img src={`${process.env.REACT_APP_PUBLIC}/images/spinner-no-bg.gif`} alt="Spinner" />
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
