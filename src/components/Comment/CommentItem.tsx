import IonIcon from "@reacticons/ionicons";
import { IComment } from "interfaces/components";
import styled from "styled-components";

interface CommentItemProps {
  comment: IComment;
}

const StyledCommentItem = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  .comment-main {
    flex: 1;
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
  .comment-feeling {
    margin-top: 10px;
    display: flex;
    gap: 14px;
    span {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <StyledCommentItem>
      <img className="comment-avatar" src={comment.avatar} alt="avatar" />
      <div className="comment-main">
        <div className="comment-header">
          <h3 className="comment-name">{comment.username}</h3>
          <span className="comment-time">8 days ago</span>
        </div>
        <p className="comment-content">{comment.content}</p>
        <div className="comment-feeling">
          <span>
            <IonIcon name="thumbs-up-outline" /> {comment.like}
          </span>
          <span>
            <IonIcon name="thumbs-down-outline" /> {comment.dislike}
          </span>
        </div>
      </div>
    </StyledCommentItem>
  );
};

export default CommentItem;
