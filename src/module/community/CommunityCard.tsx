import IonIcon from "@reacticons/ionicons";
import Heading from "components/heading/Heading";
import CommunityPlayer from "module/community/CommunityPlayer";
import DetailDescription from "module/detail/DetailDescription";
import { Link } from "react-router-dom";
import { ICommunity } from "types/community";

import styled from "styled-components";

const StyledCommunityCard = styled.div`
  margin-top: 60px;
  .header {
    display: flex;
    gap: 20px;
  }
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 100rem;
  }
  .overview {
    flex: 1;
  }
  .actions {
    display: flex;
    gap: 12px;
    text-align: center;
  }
  .action span {
    display: block;
    margin-top: 10px;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eaeaea;
    width: 4rem;
    height: 4rem;
    padding: 7px;
    border-radius: 50%;
    color: #000;
    font-size: 2.2rem;
  }
`;

const CommunityCard = ({ community }: { community: ICommunity }) => {
  const { id, refList, upInfo, introduction, likeCount, mediaInfoUrl } = community;
  const category = refList?.[0]?.category;
  const idMovie = refList?.[0]?.id;
  const url = `/detail/${idMovie}?cate=${category}`;
  return (
    <StyledCommunityCard key={id}>
      <div className="header">
        <img src={upInfo?.upImgUrl} className="avatar" alt="avatar" />
        <div className="overview">
          <Heading>{upInfo?.upName}</Heading>
          <DetailDescription rowLines={2} lineHeight={1.3}>
            {introduction}
          </DetailDescription>
        </div>
        <div className="actions">
          <div className="action">
            <div className="icon">
              <img src="images/heart.svg" alt="heart" />
            </div>
            <span>{likeCount}</span>
          </div>
          <div className="action">
            <Link to={url} className="icon">
              <IonIcon name="open-outline" />
            </Link>
            <span>Open</span>
          </div>
        </div>
      </div>
      <CommunityPlayer mediaUrl={mediaInfoUrl.mediaUrl} />
    </StyledCommunityCard>
  );
};

export default CommunityCard;
