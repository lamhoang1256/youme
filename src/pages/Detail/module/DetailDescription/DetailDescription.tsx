import { MovieDetail } from "interfaces/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StyledDetailDescription } from "./detailDescription.style";

interface DetailDescriptionProps {
  detail: MovieDetail;
}

const DetailDescription = ({ detail }: DetailDescriptionProps) => {
  return (
    <StyledDetailDescription>
      <div className="detail-summary">
        <span className="label-small">Summary : </span>
        {detail?.introduction}
      </div>
      <div className="detail-banner">
        <LazyLoadImage src={detail?.coverHorizontalUrl} alt="Banner" effect="opacity" />
      </div>
    </StyledDetailDescription>
  );
};

export default DetailDescription;
