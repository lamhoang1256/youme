import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IComment } from "types/components";
import CommentItem from "./CommentItem";

const StyledCommentList = styled.div`
  .show-all {
    color: var(--gray-color);
    margin-top: 14px;
    background-color: transparent;
    font-weight: 600;
  }
`;
const COMMENT_PER_PAGE = 4;

const CommentList = ({ comments }: { comments: IComment[] }) => {
  const { t } = useTranslation();
  const [countVisibleComment, setCountVisibleComment] = useState(COMMENT_PER_PAGE);
  const handleShowAllComment = () => {
    setCountVisibleComment(comments.length);
  };

  if (comments.length === 0)
    return (
      <StyledCommentList>
        <div className="no-comment">{t("No one has commented")}</div>
      </StyledCommentList>
    );
  return (
    <StyledCommentList>
      {comments.slice(0, countVisibleComment).map((comment: IComment) => (
        <CommentItem key={comment.uid} comment={comment} />
      ))}
      {countVisibleComment < comments.length && (
        <button type="button" onClick={handleShowAllComment} className="show-all">
          {t("Show all comments")}
        </button>
      )}
    </StyledCommentList>
  );
};

export default CommentList;
