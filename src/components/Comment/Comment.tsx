import { useAppSelector } from "App/store";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import { IComment } from "interfaces/components";
import IonIcon from "@reacticons/ionicons";
import { useTranslation } from "react-i18next";
import CommentAdd from "./CommentAdd";
import { StyledComment } from "./comment.style";
import CommentItem from "./CommentItem";

interface CommentProps {
  id: string;
}

const Comment = ({ id }: CommentProps) => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
  const [comments, setComments] = useState<any>([]);

  const fetchCommentList = async () => {
    try {
      const colRef = doc(db, "comments", id);
      const data = await getDoc(colRef);
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
          comments.map((comment: IComment) => (
            <CommentItem key={comment.createdAt.nanoseconds} comment={comment} />
          ))
        ) : (
          <div className="no-comment">{t("No one has commented")}</div>
        )}
      </div>
    </StyledComment>
  );
};

export default Comment;
