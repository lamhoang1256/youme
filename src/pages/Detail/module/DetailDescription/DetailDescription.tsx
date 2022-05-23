import { resizeImage } from "constants/resizeImage";
import { IMovieDetail } from "interfaces/detail";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StyledDetailDescription } from "./detailDescription.style";

interface DetailDescriptionProps {
  detail: IMovieDetail;
}

const DetailDescription = ({ detail }: DetailDescriptionProps) => {
  return (
    <StyledDetailDescription>
      <div className="detail-summary">
        <span className="label-small">Summary : </span>
        {detail?.introduction}
      </div>
      <div className="detail-banner">
        <LazyLoadImage
          src={resizeImage(detail?.coverHorizontalUrl, "750")}
          alt="Banner"
          effect="opacity"
        />
      </div>
    </StyledDetailDescription>
  );
};

export default DetailDescription;
