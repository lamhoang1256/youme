import styled from "styled-components";

export const StyledHomeCard = styled.div`
  position: relative;
  padding: 0 10px;
  .card-thumb {
    border-radius: 6px;
    width: 100%;
    max-height: 236px;
    object-fit: cover;
  }
  .card-name {
    text-align: center;
    padding-top: 10px;
    color: var(--white);
  }
`;
