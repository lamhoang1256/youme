import styled from "styled-components";

const StyledLoadingSpinner = styled.div``;

const LoadingSpinner = () => {
  return (
    <StyledLoadingSpinner>
      <img src={`${process.env.REACT_APP_PUBLIC}/images/spinner.gif`} alt="Spinner" />
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
