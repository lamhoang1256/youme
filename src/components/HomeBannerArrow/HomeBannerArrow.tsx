import { ReactNode } from "react";
import { StyledIcon } from "./homeBannerArrow.style";

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
