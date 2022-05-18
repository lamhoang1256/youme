import { css } from "styled-components";

export const AnimationSkeleton = () => css`
  background: var(--bg-skeleton);
  background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  background-repeat: no-repeat;
  background-size: 450px 100%;
  animation: shimmer 2s linear infinite;
  @keyframes shimmer {
    0% {
      background-position: -450px 0;
    }
    100% {
      background-position: 450px 0;
    }
  }
`;
