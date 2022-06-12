import styled, { css } from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface DetailButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

interface StyledProps {
  isActive: boolean;
}

const StyledDetailButton = styled.button<StyledProps>`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100rem;
  border: 1px solid var(--gray-color);
  background-color: transparent;
  ${(props) =>
    props.isActive
      ? css`
          border: 2px solid #e96565;
          color: #e96565;
        `
      : css`
          color: var(--gray-color);
        `};
`;

const DetailButton = ({ children, onClick, isActive, ...props }: DetailButtonProps) => {
  return (
    <StyledDetailButton onClick={onClick} {...props} isActive={isActive}>
      {children}
    </StyledDetailButton>
  );
};

export default DetailButton;
