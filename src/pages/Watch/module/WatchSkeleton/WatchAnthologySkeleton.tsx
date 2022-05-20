import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const StyledAnthologySkeleton = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  .skeleton-button {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: var(--bg-skeleton);
  }
`;

const WatchAnthologySkeleton = () => {
  return (
    <StyledAnthologySkeleton>
      {Array(12)
        .fill(0)
        .map(() => (
          <div key={uuidv4()} className="skeleton-button" />
        ))}
    </StyledAnthologySkeleton>
  );
};

export default WatchAnthologySkeleton;
