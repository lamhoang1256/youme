import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  height?: string;
  children: React.ReactNode;
  kind?: "primary" | "secondary" | "sea";
}

interface StyledButtonProps {
  height?: string;
  kind?: "primary" | "secondary" | "sea";
}

const COLOR = {
  primary: css`
    color: #fff;
    background-color: var(--primary-color);
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
  sea: css`
    color: var(--white);
    background-color: #3d6ef7;
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  font-size: 1.6rem;
  color: var(--white);
  padding: 0 25px;
  height: ${(props) => `${props.height}px`};
  border-radius: 8px;
  ${(props) => props.kind && COLOR[props.kind]}
  ${(props) => props.disabled && DISABLED}
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({ to, type, children, height, kind, onClick, ...props }: ButtonProps) => {
  if (to) {
    return (
      <Link to={to} style={{ display: "block" }}>
        <StyledButton kind={kind} type={type} height={height} {...props} onClick={onClick}>
          {children}
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton kind={kind} type={type} height={height} {...props} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  kind: "secondary",
  height: "66px",
  to: "",
};

export default Button;
