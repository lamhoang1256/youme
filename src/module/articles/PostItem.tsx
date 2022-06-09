import styled from "styled-components";
import Image from "components/image/Image";
import DetailDescription from "module/detail/DetailDescription";
import { TextClamp } from "assets/styles/_mixins";

interface PostItemProps {
  image: string;
  title: string;
  introduction: string;
}

const StyledPostItem = styled.div`
  .post-image {
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
    margin-top: 10px;
    line-height: 1.45;
    ${TextClamp.multilines(2)}
  }
`;

const PostItem = ({ image, title, introduction }: PostItemProps) => {
  return (
    <StyledPostItem>
      <div className="post-image">
        <Image url={image} width="500" alt="post" radius={10} />
      </div>
      <div className="post-content">
        <h3
          className="post-title"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
        <DetailDescription rowLines={2}>{introduction}</DetailDescription>
      </div>
    </StyledPostItem>
  );
};

export default PostItem;
