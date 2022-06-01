import CommentAdd from "./CommentAdd";
import { StyledComment } from "./comment.style";
import CommentItem from "./CommentItem";

const Comment = () => {
  return (
    <StyledComment>
      <span className="label-small">Comments (0)</span>
      <CommentAdd />
      <div className="comment-list">
        {[1, 2, 3].map((item) => (
          <CommentItem key={item} />
        ))}
      </div>
    </StyledComment>
  );
};

export default Comment;
