import { ReactNode } from "react";
import styled from "styled-components";

interface SliderArrowProps {
  className: string;
  style: any;
  onClick: any;
  children: ReactNode;
}

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SliderArrow = (props: SliderArrowProps) => {
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
