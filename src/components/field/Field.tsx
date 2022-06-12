import styled from "styled-components";

interface FieldProps {
  children: React.ReactNode;
}

const StyledField = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 14px;
`;

const Field = ({ children }: FieldProps) => {
  return <StyledField>{children}</StyledField>;
};

export default Field;
