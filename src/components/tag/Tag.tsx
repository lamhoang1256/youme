import styled from "styled-components";

interface TagProps {
  children: React.ReactNode;
}

const StyledTag = styled.label`
  font-weight: 700;
  padding-right: 10px;
`;

const Tag = ({ children }: TagProps) => {
  return <StyledTag>{children}</StyledTag>;
};

export default Tag;
