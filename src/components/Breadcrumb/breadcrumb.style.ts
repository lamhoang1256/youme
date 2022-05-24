import styled from "styled-components";

export const StyledBreabcrum = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  .crumb {
    list-style: none;
    font-size: 1.8rem;
    font-weight: 500;
    &::after {
      content: ">";
      padding-left: 10px;
    }
    &:last-child::after {
      display: none;
    }
  }
  .crumb a {
    color: var(--white);
  }
`;
