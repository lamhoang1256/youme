import styled from "styled-components";

interface TagNormalProps {
  children: React.ReactNode;
}

const StyledTagNormal = styled.span`
  font-weight: 700;
  padding-right: 10px;
`;

const TagNormal = ({ children }: TagNormalProps) => {
  return <StyledTagNormal>{children}</StyledTagNormal>;
};

export default TagNormal;
