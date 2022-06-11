import IonIcon from "@reacticons/ionicons";
import { useAppSelector } from "App/store";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IComment } from "types/components";
import CommentAdd from "./CommentAdd";
import CommentList from "./CommentList";

interface CommentProps {
  id: string;
}

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
      width: 50px;
      height: 50px;
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

const Comment = ({ id }: CommentProps) => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
  const [comments, setComments] = useState<IComment[]>([]);

  const fetchCommentList = async () => {
    try {
      const colRef = collection(db, "comments");
      const queryRef = query(colRef, where("movieId", "==", id), orderBy("createdAt", "desc"));
      onSnapshot(queryRef, (snapshot) => {
        const results: any = [];
        snapshot.forEach((doc: any) => {
          results.push({
            uid: doc.id,
            ...doc.data(),
          });
        });
        setComments(results);
      });
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
      {currentUser && <CommentAdd id={id} />}
      {!currentUser && <div className="no-login">{t("Login to comment")}</div>}
      <CommentList comments={comments} />
    </StyledComment>
  );
};

export default Comment;
