import styled from "styled-components";

export const StyledHomeSide = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  .side-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
  .side-item {
    display: flex;
    gap: 10px;
  }
  .side-thumb {
    width: 40%;
    img {
      border-radius: 4px;
    }
  }
  .side-content {
    flex: 1;
  }
  .side-name {
    color: var(--white);
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
  .side-rank {
    color: #3d6ef7;
    margin-bottom: 10px;
  }
`;
