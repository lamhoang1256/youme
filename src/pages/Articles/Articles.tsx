import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";
import { getArticles } from "apis/configAPI";
import LoadingSpinner from "components/loading/LoadingSpinner";
import PostItem from "module/post/PostItem";

interface IPostItem {
  coverImg: string;
  createTime: number;
  id: number;
  introduction: string;
  keyword: string[];
  title: string;
}

const StyledArticles = styled.div`
  .articles-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px 30px;
  }
`;

const Articles = () => {
  const { t } = useTranslation();
  const getKey = (index: number) => `articles-${index || 0}`;
  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key) => getArticles(Number(key.split("articles-").slice(-1)[0])),
    {
      revalidateFirstPage: false,
    },
  );

  useEffect(() => {
    document.title = `Youme - ${t("Articles")}`;
  }, []);

  return (
    <StyledArticles>
      <div className="container">
        <InfiniteScroll
          dataLength={data?.length || 0}
          next={() => setSize((prev: number) => prev + 1)}
          hasMore={!error && data?.slice(-1)?.[0]?.data?.list?.length !== 0}
          loader={<LoadingSpinner />}
        >
          <div className="articles-list">
            {data
              ?.reduce((acc: any, current: any) => [...acc, ...current.data.list], [])
              ?.map((post: IPostItem) => {
                const { id, title, introduction, coverImg } = post;
                return (
                  <PostItem
                    key={id}
                    id={id}
                    title={title}
                    introduction={introduction}
                    image={coverImg}
                  />
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </StyledArticles>
  );
};

export default Articles;
