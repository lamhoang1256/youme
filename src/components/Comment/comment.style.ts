import styled from "styled-components";

export const StyledComment = styled.div`
  margin-top: 10px;
  .comment {
    &-heading {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    &-avatar {
      width: 40px;
      height: 40px;
      border-radius: 100rem;
    }
  }
  .no-login {
    margin-top: 10px;
  }
  .no-comment {
    padding-top: 20px;
    text-align: center;
  }
`;
