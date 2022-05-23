import styled from "styled-components";

interface Props {
  background: string;
}

export const StyledExploreFilter = styled.div`
  margin-top: 15px;
`;

export const StyledExploreTabPanel = styled.div`
  .genre-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
  }
`;

export const StyledExploreButton = styled.button<Props>`
  background: ${(props) => props.background};
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
`;
