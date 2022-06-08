import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import IonIcon from "@reacticons/ionicons";
import { IComment } from "types/components";
import { useAppSelector } from "App/store";
import CommentAdd from "./CommentAdd";
import CommentItem from "./CommentItem";

const StyledComment = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
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

interface CommentProps {
  id: string;
}

const Comment = ({ id }: CommentProps) => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
  const [comments, setComments] = useState<IComment[]>([]);

  const fetchCommentList = async () => {
    try {
      const commentsRef = doc(db, "comments", id);
      const data = await getDoc(commentsRef);
      if (data.data()) setComments(data.data()?.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCommentList();
  }, []);

  return (
    <StyledComment>
      <h3 className="comment-heading">
        <IonIcon name="chatbubbles-outline" /> {t("Comments")} ({comments?.length})
      </h3>
      {currentUser ? (
        <CommentAdd comments={comments} fetchCommentList={fetchCommentList} id={id} />
      ) : (
        <div className="no-login">{t("Login to comment")}</div>
      )}
      <div className="comment-list">
        {comments.length > 0 ? (
          comments.map((comment: IComment) => <CommentItem key={comment.uid} comment={comment} />)
        ) : (
          <div className="no-comment">{t("No one has commented")}</div>
        )}
      </div>
    </StyledComment>
  );
};

export default Comment;
