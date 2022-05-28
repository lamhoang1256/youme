import styled from "styled-components";

export const StyledTabs = styled.div`
  display: flex;
  gap: 30px;
  .tab {
    background-color: #3d6ef7;
    color: var(--white);
    padding: 8px 20px;
    border-radius: 4px;
  }
  .tab.active {
    background-color: var(--primary-color);
  }
`;
