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
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((button) => (
        <div key={button} className="skeleton-button" />
      ))}
    </StyledAnthologySkeleton>
  );
};

export default WatchAnthologySkeleton;
