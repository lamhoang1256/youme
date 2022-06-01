import IonIcon from "@reacticons/ionicons";
import styled from "styled-components";

const StyledCommentItem = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  .comment-header {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .comment-time {
    color: #eee;
  }
  .comment-content {
    margin-top: 5px;
  }
  .comment-feeling {
    margin-top: 10px;
    display: flex;
    gap: 14px;
    span {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

const CommentItem = () => {
  return (
    <StyledCommentItem>
      <img
        className="comment-avatar"
        src="https://img.onesignal.com/permanent/e18751dc-56d8-452f-a2b8-db7db66f8120"
        alt="avatar"
      />
      <div className="comment-main">
        <div className="comment-header">
          <h3 className="comment-name">Nguyen Lam</h3>
          <span className="comment-time">8 days ago</span>
        </div>
        <p className="comment-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta obcaecati molestiae nisi
          itaque rerum consectetur
        </p>
        <div className="comment-feeling">
          <span>
            <IonIcon name="thumbs-up-outline" /> 1
          </span>
          <span>
            <IonIcon name="thumbs-down-outline" /> 2
          </span>
        </div>
      </div>
    </StyledCommentItem>
  );
};

export default CommentItem;
