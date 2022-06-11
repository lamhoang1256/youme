import Button from "components/button/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IComment } from "types/components";
import CommentItem from "./CommentItem";

const StyledCommentList = styled.div``;
const COMMENT_PER_PAGE = 2;

const CommentList = ({ comments }: { comments: IComment[] }) => {
  const { t } = useTranslation();
  const [countVisibleComment, setCountVisibleComment] = useState(COMMENT_PER_PAGE);
  const [isShowButton, setIsShowButton] = useState(true);

  const handleShowAllComment = () => {
    setCountVisibleComment(comments.length - 1);
    setIsShowButton(false);
  };

  return (
    <StyledCommentList>
      {comments.length > 0 ? (
        <>
          {comments.slice(0, countVisibleComment).map((comment: IComment) => (
            <CommentItem key={comment.uid} comment={comment} />
          ))}
          {isShowButton && (
            <Button kind="primary" onClick={handleShowAllComment}>
              Show more
            </Button>
          )}
        </>
      ) : (
        <div className="no-comment">{t("No one has commented")}</div>
      )}
    </StyledCommentList>
  );
};

export default CommentList;
