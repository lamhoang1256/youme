import styled from "styled-components";

interface ErrorMessageProps {
  children: React.ReactNode;
}

const StyledErrorMessage = styled.span`
  color: #ef4444;
`;

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

export default ErrorMessage;
