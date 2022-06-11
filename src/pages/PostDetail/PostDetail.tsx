import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPostDetail } from "apis/configAPI";
import ResultNotFound from "components/notification/ResultNotFound";
import LoadingSpinner from "components/loading/LoadingSpinner";

const StyledPostDetail = styled.div`
  .post {
    margin: 0 auto;
    max-width: 1000px;
    .tag {
      margin: 10px 0;
    }
    .tag span {
      font-size: 1.8rem;
      color: #999999;
      font-weight: 500;
    }
    img {
      margin: 14px 0;
      width: 100%;
      height: auto;
      border-radius: 8px;
      aspect-ratio: 16/9;
      background-color: var(--bg-skeleton);
    }
    p {
      font-size: 1.8rem;
      line-height: 1.7;
    }
  }
`;

interface IPostDetail {
  title: string;
  content: string;
  createTime: string;
  id: number;
  keyword: string[];
}

const PostDetail = () => {
  const id = Number(useParams().id);
  const [post, setPost] = useState<IPostDetail>(Object);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetail = async () => {
      setLoading(true);
      try {
        const { data } = await getPostDetail(id);
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchPostDetail();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  // if post not exist in firebase
  if (!post.id) {
    return (
      <div className="container">
        <ResultNotFound
          heading="Article not found"
          description="The knowledge base article could not be found"
          titleButton="Go News"
          to="/articles"
        />
      </div>
    );
  }

  return (
    <StyledPostDetail>
      <div className="container">
        <div className="post">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div className="tag">
            <span>Published At: </span>
            <span>{new Date(post.createTime).toLocaleDateString("vi-VI")}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </StyledPostDetail>
  );
};

export default PostDetail;
