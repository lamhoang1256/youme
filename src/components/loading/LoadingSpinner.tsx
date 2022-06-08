import styled from "styled-components";

const StyledLoadingSpinner = styled.div`
  margin: 40px auto;
  width: 40px;
  height: 40px;
  pointer-events: none;
  border: 4px solid transparent;
  border-color: #eee;
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: loadingspin 1.2s linear infinite;
  @keyframes loadingspin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => {
  return <StyledLoadingSpinner />;
};

export default LoadingSpinner;
