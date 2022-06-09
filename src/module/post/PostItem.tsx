import styled from "styled-components";
import Image from "components/image/Image";
import DetailDescription from "module/detail/DetailDescription";
import { TextClamp } from "assets/styles/_mixins";
import { Link } from "react-router-dom";

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
  }
`;

const PostItem = ({ image, title, introduction, id }: PostItemProps) => {
  return (
    <StyledPostItem>
      <div className="post-image">
        <Image url={image} width="500" height="282" alt="post" />
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
