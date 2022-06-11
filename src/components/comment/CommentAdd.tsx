import { useAppSelector } from "App/store";
import { db } from "firebase-app/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import styled from "styled-components";
import { toastErrorFirebase } from "utils/toastError";

const StyledCommentAdd = styled.form`
  display: flex;
  gap: 14px;
  .comment {
    &-post {
      margin-top: 14px;
      width: 100%;
      display: flex;
      gap: 14px;
    }
    &-textarea {
      flex: 1;
      border-radius: 10px;
      padding: 14px;
      min-height: 50px;
      flex: 1;
      resize: none;
      overflow-y: hidden;
      background-color: #39354d;
      color: var(--white);
      &::placeholder {
        color: var(--white);
      }
    }
    &-button {
      border-radius: 4px;
      padding: 0 20px;
      background-color: var(--primary-color);
      color: var(--white);
      height: 50px;
      place-self: end;
    }
  }
  @media screen and (max-width: 767.98px) {
    flex-direction: column;
    align-items: inherit;
    .comment-button {
      height: 36px;
      place-self: unset;
    }
  }
`;

interface CommentAddProps {
  id: string;
}

const CommentAdd = ({ id }: CommentAddProps) => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
  const [commentValue, setCommentValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };

  const handleAddNewComment = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (commentValue === "") {
        toast.error(t("Comment must be filled out"));
        return;
      }
      const colRef = collection(db, "comments");
      await addDoc(colRef, {
        userId: currentUser.uid,
        username: currentUser.username,
        avatar: currentUser.avatar,
        email: currentUser.email,
        content: commentValue,
        movieId: id,
        createdAt: serverTimestamp(),
      });
      setCommentValue("");
    } catch (error: any) {
      toastErrorFirebase(error.message);
    }
  };

  useEffect(resizeTextArea, [commentValue]);

  return (
    <StyledCommentAdd onSubmit={handleAddNewComment} method="POST">
      <div className="comment-post">
        <img className="comment-avatar" src={currentUser.avatar} alt="avatar" />
        <textarea
          className="comment-textarea"
          placeholder={t("Add a comment...")}
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          onKeyPress={(e) => e.stopPropagation()}
          ref={textAreaRef}
          value={commentValue}
          onChange={onChange}
          rows={1}
        />
      </div>
      <button type="submit" className="comment-button">
        {t("Post")}
      </button>
    </StyledCommentAdd>
  );
};

export default CommentAdd;
