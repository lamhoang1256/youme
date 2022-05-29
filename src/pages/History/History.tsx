import { useEffect, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import styled from "styled-components";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import MovieList from "components/MovieList/MovieList";
import Nothing from "components/Nothing/Nothing";
import { IMovieList } from "interfaces/components";

const StyledHistory = styled.div`
  .history {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    &-clear {
      padding: 8px 10px;
      background-color: transparent;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 4px;
    }
  }
`;

const crumbs = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "History", path: "/history" },
];

const History = () => {
  const [moviesHistory, setMoviesHistory] = useState<IMovieList[]>([]);
  const getHistory = () => {
    const historyLocal = JSON.parse(localStorage.getItem("movie-history") || "[]");
    setMoviesHistory(historyLocal);
  };

  const handleClearHistory = () => {
    localStorage.setItem("movie-history", "[]");
    getHistory();
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <StyledHistory>
      <div className="container">
        <div className="history-header">
          <Breadcrumb crumbs={crumbs} />
          <button type="button" className="history-clear" onClick={handleClearHistory}>
            Clear <IonIcon name="trash-outline" />
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
