import { useAppSelector } from "App/store";
import { db } from "firebase-app/firebase-config";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { IComment } from "interfaces/components";
import { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledCommentAdd = styled.form`
  .comment-post {
    margin-top: 10px;
    width: 100%;
    display: flex;
    gap: 14px;
  }
  .comment-textarea {
    flex: 1;
    border-radius: 10px;
    padding: 20px;
    min-height: 50px;
    flex: 1;
    resize: none;
    overflow-y: hidden;
    background-color: #434b5a;
    color: var(--white);
    &::placeholder {
      color: var(--white);
    }
  }
  .comment-action {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: end;
  }
  .comment-button {
    border-radius: 4px;
    padding: 8px 20px;
    background-color: var(--primary-color);
    color: var(--white);
  }
`;

interface CommentAddProps {
  comments: IComment[];
  fetchCommentList: () => Promise<void>;
}

const CommentAdd = ({ comments, fetchCommentList }: CommentAddProps) => {
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

  const handleAddComment = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (commentValue === "") return;
      await setDoc(doc(db, "comments", "12269"), {
        comments: [
          ...comments,
          {
            userId: currentUser.uid,
            username: currentUser.username,
            avatar: currentUser.avatar,
            email: currentUser.email,
            content: commentValue,
            like: 0,
            dislike: 0,
            createdAt: Timestamp.now(),
          },
        ],
      });
      fetchCommentList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(resizeTextArea, [commentValue]);

  return (
    <StyledCommentAdd className="comment-form" onSubmit={handleAddComment}>
      <div className="comment-post">
        <img
          className="comment-avatar"
          src="https://img.onesignal.com/permanent/e18751dc-56d8-452f-a2b8-db7db66f8120"
          alt="avatar"
        />
        <textarea
          className="comment-textarea"
          placeholder="Add a comment..."
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          onKeyPress={(e) => e.stopPropagation()}
          ref={textAreaRef}
          value={commentValue}
          onChange={onChange}
          rows={1}
        />
      </div>
      <div className="comment-action">
        <button type="button" onClick={() => setCommentValue("")} className="comment-button">
          Cancel
        </button>
        <button type="submit" className="comment-button">
          Add Comment
        </button>
      </div>
    </StyledCommentAdd>
  );
};

export default CommentAdd;
