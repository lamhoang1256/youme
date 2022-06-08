import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const StyledButtonGradient = styled.button`
  position: relative;
  font-size: 1.8rem;
  padding: 8px 20px;
  border-radius: 8px;
  color: #fff;
  isolation: isolate;
  overflow: hidden;
  &.primary {
    background-image: var(--gradient-primary);
  }
  &.secondary {
    background-image: var(--gradient-secondary);
  }
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

interface ButtonGradientProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonGradient = ({ children, ...otherProps }: ButtonGradientProps) => {
  return (
    <StyledButtonGradient type="button" {...otherProps}>
      {children}
    </StyledButtonGradient>
  );
};

export default ButtonGradient;
