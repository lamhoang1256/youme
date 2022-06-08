import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import vi from "javascript-time-ago/locale/vi";
import { IComment } from "interfaces/components";

const language = localStorage.getItem("language");
if (language === "vi") {
  TimeAgo.addDefaultLocale(vi);
} else {
  TimeAgo.addDefaultLocale(en);
}

interface CommentItemProps {
  comment: IComment;
}

const StyledCommentItem = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 14px;
  .comment {
    &-main {
      flex: 1;
    }
    &-header {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    &-time {
      color: #eee;
    }
    &-content {
      margin-top: 5px;
    }
  }
`;

const CommentItem = ({ comment }: CommentItemProps) => {
  const { avatar, username, createdAt, content } = comment;
  const timeAgo = new TimeAgo("en-US");

  return (
    <StyledCommentItem>
      <img className="comment-avatar" src={avatar} alt="avatar" />
      <div className="comment-main">
        <div className="comment-header">
          <h3 className="comment-name">{username}</h3>
          <span className="comment-time">{timeAgo.format(createdAt.seconds * 1000)}</span>
        </div>
        <p className="comment-content">{content}</p>
      </div>
    </StyledCommentItem>
  );
};

export default CommentItem;
