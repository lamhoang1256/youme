import styled from "styled-components";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const StyledLabel = styled.label``;

const Label = ({ htmlFor, children, ...props }: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      {children}
    </StyledLabel>
  );
};

export default Label;
