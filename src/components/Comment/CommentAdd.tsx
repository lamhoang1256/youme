import { useEffect, useRef, useState } from "react";
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
    padding: 10px 20px;
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

const CommentAdd = () => {
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
  useEffect(resizeTextArea, [commentValue]);

  return (
    <StyledCommentAdd className="comment-form">
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
