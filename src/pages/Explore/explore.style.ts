import styled from "styled-components";

export const StyledExplore = styled.div`
  .tab-content {
    margin-top: 20px;
  }
  .genre-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
  }
  .genre-item:first-child {
    background-color: red;
  }
`;

interface Props {
  background: string;
}

export const StyledExploreButton = styled.button<Props>`
  background: ${(props) => props.background};
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
`;
