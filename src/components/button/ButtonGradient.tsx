import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface ButtonGradientProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  kind?: "primary" | "secondary";
}

interface StyledButtonProps {
  kind?: "primary" | "secondary";
}

const GRADIENT = {
  primary: css`
    background-image: var(--gradient-primary);
  `,
  secondary: css`
    background-image: var(--gradient-secondary);
  `,
};

const StyledButtonGradient = styled.button<StyledButtonProps>`
  position: relative;
  font-size: 1.8rem;
  padding: 8px 20px;
  border-radius: 8px;
  color: #fff;
  isolation: isolate;
  overflow: hidden;
  ${(props) => props.kind && GRADIENT[props.kind]}
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: auto;
    top: 0;
    height: 100%;
    width: 0;
    background-color: rgb(255 255 255 / 0.2);
    z-index: -1;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover::before {
    left: auto;
    right: 0;
    width: 100%;
  }
  @media screen and (max-width: 767.98px) {
    font-size: 1.6rem;
  }
`;

const ButtonGradient = ({ children, to, kind, ...otherProps }: ButtonGradientProps) => {
  if (to) {
    return (
      <Link to={to} style={{ display: "block" }}>
        <StyledButtonGradient type="button" {...otherProps} kind={kind}>
          {children}
        </StyledButtonGradient>
      </Link>
    );
  }
  return (
    <StyledButtonGradient type="button" {...otherProps} kind={kind}>
      {children}
    </StyledButtonGradient>
  );
};

ButtonGradient.defaultProps = {
  to: "",
  kind: "",
};

export default ButtonGradient;
