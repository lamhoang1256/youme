import IonIcon from "@reacticons/ionicons";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface WatchMetaProps {
  countFullEpisode: number;
  countCurrEpisode: number;
  score: number;
  year: number;
  areaList: {
    id: number;
    name: string;
  }[];
}

const StyledWatchMeta = styled.ul`
  --gap-x: 32px;
  --gap-y: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-y) var(--gap-x);
  overflow: hidden;
  li {
    position: relative;
  }
  li:last-child::after {
    display: none;
  }
  li::after {
    content: "";
    position: absolute;
    right: calc(var(--gap-x) * -1);
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 100rem;
    background-color: var(--primary-color);
  }
  .areas {
    gap: 8px;
    display: flex;
  }
`;

const WatchMeta = ({
  countFullEpisode,
  countCurrEpisode,
  score,
  areaList,
  year,
}: WatchMetaProps) => {
  const { t } = useTranslation();

  return (
    <StyledWatchMeta>
      <li>
        <IonIcon name="star-outline" /> {score}
      </li>
      <li className="areas">
        {areaList.map((area) => (
          <span key={area.id}>{area.name}</span>
        ))}
      </li>
      {countCurrEpisode && (
        <li>
          {t("EP")} {countCurrEpisode}/ {countFullEpisode}
        </li>
      )}
      <li>{year}</li>
    </StyledWatchMeta>
  );
};

export default WatchMeta;
