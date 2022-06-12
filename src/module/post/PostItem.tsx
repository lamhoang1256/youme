import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageResize from "components/image/ImageResize";
import DetailDescription from "module/detail/DetailDescription";
import { TextClamp } from "assets/styles/_mixins";

interface PostItemProps {
  image: string;
  title: string;
  introduction: string;
  id: number;
}

const StyledPostItem = styled.div`
  .post-image {
    width: 100%;
    aspect-ratio: 16/9;
    background-color: var(--bg-skeleton);
    border-radius: 10px;
    overflow: hidden;
  }
  .post-image img {
    width: 100%;
    object-fit: cover;
  }
  .post-title {
    color: var(--white);
    margin-top: 10px;
    line-height: 1.45;
    ${TextClamp.multilines(2)}
    transition: all 0.25s linear;
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const PostItem = ({ image, title, introduction, id }: PostItemProps) => {
  return (
    <StyledPostItem>
      <div className="post-image">
        <ImageResize url={image} width="500" height="282" alt="post" to={`/post/${id}`} />
      </div>
      <div className="post-content">
        <Link to={`/post/${id}`}>
          <h3
            className="post-title"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </Link>
        <DetailDescription rowLines={2}>{introduction}</DetailDescription>
      </div>
    </StyledPostItem>
  );
};

export default PostItem;
