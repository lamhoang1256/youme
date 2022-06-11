import styled from "styled-components";

interface LabelNormalProps {
  children: React.ReactNode;
}

const StyledLabelNormal = styled.span`
  font-weight: 700;
  padding-right: 10px;
`;

const LabelNormal = ({ children }: LabelNormalProps) => {
  return <StyledLabelNormal>{children}</StyledLabelNormal>;
};

export default LabelNormal;
