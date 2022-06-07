import styled from "styled-components";

interface HeadingProps {
  className?: string;
  children: React.ReactNode;
  fontSize?: string;
}

interface StyledProps {
  fontSize?: string;
}

const StyledHeading = styled.h2<StyledProps>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
`;

const Heading = ({ className, children, fontSize }: HeadingProps) => {
  return (
    <StyledHeading className={className} fontSize={fontSize}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultProps = {
  className: "",
  fontSize: "20px",
};

export default Heading;
