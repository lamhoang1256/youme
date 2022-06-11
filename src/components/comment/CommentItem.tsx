import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import vi from "javascript-time-ago/locale/vi";
import { IComment } from "types/components";

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
  .comment-main {
    flex: 1;
  }
  .comment-name {
    font-size: 1.8rem;
    color: #eee;
  }
  .comment-time {
    display: block;
    margin: 4px 0 6px;
    color: var(--gray-color);
    font-size: 1.4rem;
  }
  .comment-content {
    margin-top: 5px;
  }
`;

const CommentItem = ({ comment }: CommentItemProps) => {
  const { avatar, username, createdAt, content } = comment;
  const timeAgo = new TimeAgo("en-US");

  if (!createdAt) return null;
  return (
    <StyledCommentItem>
      <img className="comment-avatar" src={avatar} alt="avatar" />
      <div className="comment-main">
        <h3 className="comment-name">{username}</h3>
        <span className="comment-time">{timeAgo.format(createdAt.seconds * 1000)}</span>
        <p className="comment-content">{content}</p>
      </div>
    </StyledCommentItem>
  );
};

export default CommentItem;
