import { useAppSelector } from "App/store";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import { IComment } from "interfaces/components";
import CommentAdd from "./CommentAdd";
import { StyledComment } from "./comment.style";
import CommentItem from "./CommentItem";

const Comment = () => {
  const id = "12269";
  const { currentUser } = useAppSelector((state) => state.auth);
  const [comments, setComments] = useState<any>([]);

  const fetchCommentList = async () => {
    try {
      const colRef = doc(db, "comments", id);
      const data = await getDoc(colRef);
      if (data.data()) setComments(data.data()?.comments);
      console.log(data.data()?.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCommentList();
  }, []);

  return (
    <StyledComment>
      <span className="label-small">Comments</span>
      {currentUser ? (
        <CommentAdd comments={comments} fetchCommentList={fetchCommentList} />
      ) : (
        <div className="no-login">Login to comment</div>
      )}
      <div className="comment-list">
        {comments
          ? comments.map((comment: IComment) => (
              <CommentItem key={comment.userId} comment={comment} />
            ))
          : "No comments"}
      </div>
    </StyledComment>
  );
};

export default Comment;
