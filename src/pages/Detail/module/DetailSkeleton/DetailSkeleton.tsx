import { StyleDetailSkeleton } from "./detailSkeleton.style";

const DetailSkeleton = () => {
  return (
    <StyleDetailSkeleton>
      <div className="skeleton-top">
        <div className="skeleton-thumb" />
        <div className="skeleton-main">
          <div className="skeleton-header">
            <div className="skeleton-heading" />
            <div className="skeleton-score" />
          </div>
          <div className="skeleton-introduction" />
          <div className="skeleton-categoríes">
            <div className="skeleton-category-label" />
            <div className="skeleton-category" />
            <div className="skeleton-category" />
            <div className="skeleton-category" />
          </div>
          <div className="skeleton-action">
            <div className="skeleton-watch" />
            <div className="skeleton-circle" />
            <div className="skeleton-circle" />
          </div>
        </div>
      </div>
      <div className="skeleton-bottom">
        <div className="skeleton-summary" />
        <div className="skeleton-banner" />
      </div>
    </StyleDetailSkeleton>
  );
};

export default DetailSkeleton;
