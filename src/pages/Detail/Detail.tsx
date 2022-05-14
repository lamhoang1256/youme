import { AppDispatch, useAppSelector } from "App/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchDetail } from "./detail.slice";
import { StyledDetail } from "./detail.style";

type DetailParams = {
  id: string;
};

const Detail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<DetailParams>();
  const idMovie: number = Number(id);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const cate = Number(searchParams.get("cate"));

  const { isLoading, detailMovie } = useAppSelector((state) => state.detail);
  console.log(detailMovie);

  useEffect(() => {
    dispatch(fetchDetail({ idMovie, cate }));
  }, [dispatch, idMovie, cate]);

  return (
    <StyledDetail>
      <div className="container">
        {isLoading && "Loading"}
        {/* {!isLoading && } */}
        <div className="detail-info">
          <div className="detail-thumb">
            <img src={detailMovie?.coverVerticalUrl} alt="Thumbnail" />
          </div>
          <div className="detail-content">
            <div className="detail-top">
              <h2 className="detail-heading">{detailMovie?.name}</h2>
              <div className="detail-rate">{detailMovie?.score}</div>
            </div>
            <div className="detail-main">
              <p>{detailMovie?.introduction}</p>
            </div>
            <div className="detail-categoríes">
              {detailMovie?.tagNameList.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <button type="button">Watch Now</button>
          </div>
        </div>
      </div>
    </StyledDetail>
  );
};

export default Detail;
