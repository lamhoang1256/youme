import styled from "styled-components";

export const StyledComment = styled.div`
  margin-top: 10px;
  .comment-box {
    margin-top: 10px;
    width: 100%;
    display: flex;
    gap: 14px;
  }
  .comment-avatar {
    width: 40px;
    height: 40px;
    border-radius: 100rem;
  }
  .comment-bar {
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
  }
  .comment-input {
    flex: 1;
    padding: 12px 20px;
    background-color: #434b5a;
    color: var(--white);
    &::placeholder {
      color: var(--white);
    }
  }
  .comment-button {
    padding: 8px 20px;
    background-color: var(--primary-color);
    color: var(--white);
  }
  .comment-item {
    margin-top: 20px;
    display: flex;
    gap: 20px;
  }
  .comment-header {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .comment-time {
    color: #eee;
  }
  .comment-content {
    margin-top: 5px;
  }
`;
