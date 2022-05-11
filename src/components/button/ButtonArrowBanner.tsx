import { ReactNode } from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    width: 20px;
    height: 20px;
  }
`;

interface ButtonProps {
  className: string;
  style: any;
  onClick: any;
  children: ReactNode;
}

export const ButtonArrow = (props: ButtonProps) => {
  const { className, style, onClick, children } = props;
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <StyledIcon>{children}</StyledIcon>
    </div>
  );
};
