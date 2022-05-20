import { ReactNode } from "react";
import { StyledIcon } from "./SliderArrow.style";

interface SliderArrowProps {
  className: string;
  style: any;
  onClick: any;
  children: ReactNode;
}

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
