import styled from "styled-components";

export const StyledHomeCard = styled.div`
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
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;
