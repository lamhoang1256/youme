import IonIcon from "@reacticons/ionicons";
import { StyledComment } from "./comment.style";

const Comment = () => {
  return (
    <StyledComment>
      <span className="label-small">Comments (0)</span>
      <form className="comment-box">
        <img
          className="comment-avatar"
          src="https://img.onesignal.com/permanent/e18751dc-56d8-452f-a2b8-db7db66f8120"
          alt="avatar"
        />
        <div className="comment-bar">
          <input
            type="text"
            className="comment-input"
            placeholder="Add a comment..."
            onKeyDown={(e) => e.stopPropagation()}
            onKeyUp={(e) => e.stopPropagation()}
            onKeyPress={(e) => e.stopPropagation()}
          />
          <button type="button" className="comment-button">
            <IonIcon name="paper-plane-outline" />
          </button>
        </div>
      </form>
      <div className="comment-list">
        <div className="comment-item">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta obcaecati molestiae
              nisi itaque rerum consectetur
            </p>
          </div>
        </div>
        <div className="comment-item">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta obcaecati molestiae
              nisi itaque rerum consectetur
            </p>
          </div>
        </div>
      </div>
    </StyledComment>
  );
};

export default Comment;
