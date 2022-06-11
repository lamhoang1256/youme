import styled from "styled-components";

const StyledLabelError = styled.p`
  color: #ff493f;
  margin-bottom: 8px;
`;

const LabelError = ({ children }: { children: React.ReactNode }) => {
  return <StyledLabelError>{children}</StyledLabelError>;
};

export default LabelError;
