import styled from "styled-components";
import { useEffect, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { useTranslation } from "react-i18next";
import { IMovieCard } from "types/components";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import MovieList from "components/movie/MovieList";
import Nothing from "components/notification/Nothing";

const StyledHistory = styled.div`
  .history {
    &-header {
      display: flex;
      justify-content: space-between;
    }
    &-clear {
      height: fit-content;
      background-color: transparent;
      color: var(--white);
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 4px;
    }
  }
`;

const crumbs = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "History", path: "/history" },
];

const History = () => {
  const [moviesHistory, setMoviesHistory] = useState<IMovieCard[]>([]);
  const { t } = useTranslation();
  const getHistory = () => {
    const historyLocal = JSON.parse(localStorage.getItem("movie-history") || "[]");
    setMoviesHistory(historyLocal);
  };

  const handleClearHistory = () => {
    localStorage.setItem("movie-history", "[]");
    getHistory();
  };
  useEffect(() => {
    document.title = `Youme - ${t("History")}`;
    getHistory();
  }, []);

  return (
    <StyledHistory>
      <div className="container">
        <div className="history-header">
          <Breadcrumb crumbs={crumbs} />
          <button type="button" className="history-clear" onClick={handleClearHistory}>
            {t("Clear")} <IonIcon name="trash-outline" />
          </button>
        </div>
        {moviesHistory?.length > 0 ? (
          <MovieList movieList={moviesHistory} />
        ) : (
          <Nothing
            image={`${process.env.REACT_APP_PUBLIC}/images/history.png`}
            heading="No History Yet!"
            description="Let's start exploring Youme"
            titleButton="Explore"
            redirect="/explore"
          />
        )}
      </div>
    </StyledHistory>
  );
};

export default History;
